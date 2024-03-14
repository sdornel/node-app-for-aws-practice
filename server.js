const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(express.static(__dirname));

app.post('/api/data', (req, res) => {
    const inputData = req.body.data;
    console.log('Received data:', inputData);

    res.send(`Received data: ${inputData}`);
});

app.get('/api', (req, res) => {
    console.log('got here');
    res.send('Got here!');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});