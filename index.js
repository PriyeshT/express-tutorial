const express = require('express');
const app = express();
const port = 7777;

app.get('/', (req,res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Express app initiated listening at ${port}`);
})