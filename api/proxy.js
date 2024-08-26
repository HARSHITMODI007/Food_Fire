// api/proxy.js

export default async function handler(req, res) {
    const { url } = req.query;
  
    if (!url) {
      res.status(400).json({ error: 'URL is required' });
      return;
    }
  
    try {
      // Dynamically import node-fetch
      const { default: fetch } = await import('node-fetch');
      
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching data from the external API' });
    }
  }
  