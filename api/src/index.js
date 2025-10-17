import express from "express";

const app = express();

app.get('/', (req, res) => {
    console.log('it works');
    res.send('it works')

})
app.listen(3030, () => 'server is listening on http://localhost:3030...')