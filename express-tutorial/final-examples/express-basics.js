const express = require('express');
const app = express();

//app.get
app.get('/', (req, res) => {
    res.status(200).send('Home Page')
})
app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})
// the method below covers all error scenarios
app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not found</h1>')
})
//app.post


//app.put


//app.delete


//app.all


//app.use



//app.listen
app.listen(5000, () => {
    console.log('server is listening on port 5000...');
})