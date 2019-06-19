const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const verifyWebhook = require('./verify-webhook');

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Server on');
});

app.get('/webhook', verifyWebhook);

app.listen(PORT, () => console.log(`Express server is listening on port ${PORT}`));