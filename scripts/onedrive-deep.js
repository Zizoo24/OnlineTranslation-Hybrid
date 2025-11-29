import { Client } from '@microsoft/microsoft-graph-client';

let connectionSettings;

async function getAccessToken() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=onedrive',
    { headers: { 'Accept': 'application/json', 'X_REPLIT_TOKEN': xReplitToken } }
  ).then(res => res.json()).then(data => data.items?.[0]);

  return connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;
}

async function exploreFolder(folderPath) {
  const accessToken = await getAccessToken();
  const client = Client.initWithMiddleware({
    authProvider: { getAccessToken: async () => accessToken }
  });

  try {
    const result = await client.api(`/me/drive/root:/${folderPath}:/children`).get();
    console.log(`\n${folderPath}:`);
    for (const item of result.value) {
      const size = item.size ? `(${Math.round(item.size/1024)}KB)` : '';
      console.log(`  - ${item.name} ${item.folder ? '[folder]' : size}`);
    }
  } catch (err) {
    console.error(`Error exploring ${folderPath}:`, err.message);
  }
}

await exploreFolder('OnlineTranslationae/Porto');
await exploreFolder('OnlineTranslationae/sticky mobile Final (at work) final use this Unified');
await exploreFolder('OnlineTranslationae/aSTRO');
