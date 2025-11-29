const { Client } = require('@microsoft/microsoft-graph-client');
const fs = require('fs');
const path = require('path');

let connectionSettings;

async function getAccessToken() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) throw new Error('X_REPLIT_TOKEN not found');

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=onedrive',
    { headers: { 'Accept': 'application/json', 'X_REPLIT_TOKEN': xReplitToken } }
  ).then(res => res.json()).then(data => data.items?.[0]);

  return connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;
}

async function getClient() {
  const accessToken = await getAccessToken();
  return Client.initWithMiddleware({
    authProvider: { getAccessToken: async () => accessToken }
  });
}

async function downloadFile(client, itemId, destPath) {
  try {
    const stream = await client.api(`/me/drive/items/${itemId}/content`).getStream();
    const chunks = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);
    fs.writeFileSync(destPath, buffer);
    console.log(`Downloaded: ${path.basename(destPath)} (${Math.round(buffer.length/1024)}KB)`);
    return true;
  } catch (err) {
    console.error(`Failed: ${path.basename(destPath)} - ${err.message}`);
    return false;
  }
}

async function findAndDownload() {
  const client = await getClient();
  
  // Create directories
  const dirs = ['images/onedrive', 'images/onedrive/services', 'images/onedrive/tiles', 'images/onedrive/hero', 'images/onedrive/locations'];
  dirs.forEach(d => fs.mkdirSync(d, { recursive: true }));
  
  // Find OtLegalTranslationcom folder
  const root = await client.api('/me/drive/root/children').get();
  const otFolder = root.value.find(f => f.name === 'OtLegalTranslationcom');
  if (!otFolder) { console.log('Folder not found'); return; }
  
  // Get all items recursively
  const allItems = [];
  async function getItems(folderId, folderPath) {
    const items = await client.api(`/me/drive/items/${folderId}/children`).get();
    for (const item of items.value) {
      item.folderPath = folderPath;
      allItems.push(item);
      if (item.folder && item.folder.childCount > 0) {
        await getItems(item.id, folderPath + '/' + item.name);
      }
    }
  }
  await getItems(otFolder.id, '');
  
  // Define what to download
  const downloads = [
    // Service tiles
    { match: 'tile-corporate.png', dest: 'images/onedrive/tiles/tile-corporate.png' },
    { match: 'tile-courts.png', dest: 'images/onedrive/tiles/tile-courts.png' },
    { match: 'tile-immigration.png', dest: 'images/onedrive/tiles/tile-immigration.png' },
    // Locations
    { match: 'palm_jumeirah.png', dest: 'images/onedrive/locations/palm-jumeirah.png' },
    { match: 'expo sharjah.png', dest: 'images/onedrive/locations/sharjah.png' },
    // Contact
    { match: 'contact-office-blur.png', dest: 'images/onedrive/contact-office.png' },
    { match: 'contact-dxb.png', dest: 'images/onedrive/contact-dxb.png' },
    // Hero backgrounds
    { match: 'city-cyber.png', dest: 'images/onedrive/hero/city-cyber.png' },
    { match: 'cyber-smith.png', dest: 'images/onedrive/hero/cyber-smith.png' },
    // Process steps
    { match: 'steps-quote.png', dest: 'images/onedrive/steps-quote.png' },
    { match: 'steps-upload.png', dest: 'images/onedrive/steps-upload.png' },
    { match: 'stamped hardcopy.png', dest: 'images/onedrive/stamped-hardcopy.png' },
    { match: 'stamped hardcopy 2.png', dest: 'images/onedrive/stamped-hardcopy-2.png' },
    // WhatsApp
    { match: 'whatsapp translation.png', dest: 'images/onedrive/whatsapp-translation.png' },
    // Services photos
    { match: 'services-1.JPG', dest: 'images/onedrive/services/services-1.jpg' },
    { match: 'services-2.JPG', dest: 'images/onedrive/services/services-2.jpg' },
    { match: 'services-3.JPG', dest: 'images/onedrive/services/services-3.jpg' },
    { match: 'services-4.JPG', dest: 'images/onedrive/services/services-4.jpg' },
    { match: 'services-5.JPG', dest: 'images/onedrive/services/services-5.jpg' },
    { match: 'services-6.JPG', dest: 'images/onedrive/services/services-6.jpg' },
    // Logo files
    { match: 'OT_combo_800x186.png', dest: 'images/onedrive/logo-combo.png' },
    { match: 'Emblem ONLY.png', dest: 'images/onedrive/emblem.png' },
    // Specials
    { match: 'OT MAN.png', dest: 'images/onedrive/hero/ot-man.png' },
    { match: 'medical cyber.png', dest: 'images/onedrive/hero/medical-cyber.png' },
    { match: 'Technical Translation.png', dest: 'images/onedrive/hero/technical-translation.png' },
    { match: 'vis translation.png', dest: 'images/onedrive/hero/vis-translation.png' },
  ];
  
  console.log(`Found ${allItems.length} items in OneDrive. Downloading key assets...\n`);
  
  for (const dl of downloads) {
    const item = allItems.find(i => i.name === dl.match);
    if (item) {
      await downloadFile(client, item.id, dl.dest);
    } else {
      console.log(`Not found: ${dl.match}`);
    }
  }
  
  console.log('\nDone!');
}

findAndDownload().catch(console.error);
