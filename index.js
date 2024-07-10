const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Health Check Endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'GUIDGecko API is running' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});