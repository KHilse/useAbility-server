const express = require('express');
require('dotenv').config();
const app = express();

// MIDDLEWARE
app.use('/', express.static('/public'));

// CONTROLLERS
app.use('/members', require('./controllers/members'));

app.get('/', (req, res) => {
    res.send('Root route');
})

app.get('*', (req, res) => {
    res.status(404).send('ERROR 404: not found');
})


app.listen(process.env.PORT || 3001);