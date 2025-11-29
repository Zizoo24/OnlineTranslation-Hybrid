import { Client } from '@microsoft/microsoft-graph-client';

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

async function listFiles() {
  const accessToken = await getAccessToken();
  const client = Client.initWithMiddleware({
    authProvider: { getAccessToken: async () => accessToken }
  });

  try {
    // List root folder
    const result = await client.api('/me/drive/root/children').get();
    console.log('OneDrive Root Files:');
    result.value.forEach(item => {
      console.log(`- ${item.name} (${item.folder ? 'folder' : 'file'})`);
    });
    
    // Try to find images folder
    const pictures = result.value.find(f => f.name.toLowerCase().includes('picture') || f.name.toLowerCase().includes('image') || f.name.toLowerCase().includes('photo'));
    if (pictures && pictures.folder) {
      console.log(`\nFound folder: ${pictures.name}`);
      const picResult = await client.api(`/me/drive/items/${pictures.id}/children`).get();
      picResult.value.forEach(item => {
        console.log(`  - ${item.name}`);
      });
    }
  } catch (err) {
    console.error('Error:', err.message);
  }
}

listFiles();
