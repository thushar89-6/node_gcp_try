const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('hello bvc!!!! vanas aanda??');
});

// Define a route
app.get('/hello', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
