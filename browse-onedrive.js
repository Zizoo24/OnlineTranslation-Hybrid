const { Client } = require('@microsoft/microsoft-graph-client');

let connectionSettings;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=onedrive',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('OneDrive not connected');
  }
  return accessToken;
}

async function getClient() {
  const accessToken = await getAccessToken();
  return Client.initWithMiddleware({
    authProvider: {
      getAccessToken: async () => accessToken
    }
  });
}

async function listFolder(path = '/') {
  const client = await getClient();
  
  try {
    // First get root to understand structure
    console.log('=== Browsing OneDrive ===\n');
    
    // Try to find OtLegalTranslationcom folder
    const root = await client.api('/me/drive/root/children').get();
    console.log('Root folders:');
    for (const item of root.value) {
      console.log(`  ${item.folder ? '[FOLDER]' : '[FILE]'} ${item.name}`);
    }
    
    // Look for the OtLegalTranslationcom folder
    const otFolder = root.value.find(f => f.name.toLowerCase().includes('otlegaltranslation') || f.name.toLowerCase().includes('ot'));
    
    if (otFolder) {
      console.log(`\n=== Found folder: ${otFolder.name} ===\n`);
      await listFolderRecursive(client, otFolder.id, otFolder.name, 0);
    } else {
      console.log('\nSearching for OtLegalTranslation folder...');
      const search = await client.api('/me/drive/root/search(q=\'OtLegalTranslation\')').get();
      console.log('Search results:');
      for (const item of search.value.slice(0, 20)) {
        console.log(`  ${item.folder ? '[FOLDER]' : '[FILE]'} ${item.name} - ${item.parentReference?.path || ''}`);
      }
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

async function listFolderRecursive(client, folderId, folderName, depth) {
  const indent = '  '.repeat(depth);
  const items = await client.api(`/me/drive/items/${folderId}/children`).get();
  
  for (const item of items.value) {
    if (item.folder) {
      console.log(`${indent}[FOLDER] ${item.name} (${item.folder.childCount} items)`);
      if (depth < 3) { // Limit depth to avoid too much output
        await listFolderRecursive(client, item.id, item.name, depth + 1);
      }
    } else {
      const size = item.size ? `(${Math.round(item.size/1024)}KB)` : '';
      const isImage = /\.(jpg|jpeg|png|gif|webp|svg|bmp)$/i.test(item.name);
      console.log(`${indent}${isImage ? '[IMG]' : '[FILE]'} ${item.name} ${size}`);
    }
  }
}

listFolder();
