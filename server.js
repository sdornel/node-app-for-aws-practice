const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Handle POST requests to /api/data
app.post('/api/data', (req, res) => {
    const inputData = req.body.data;
    console.log('Received data:', inputData);

    // Process the data and send a response
    res.send(`Received data: ${inputData}`);
});

app.get('/', (req, res) => {
    console.log('got here');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});