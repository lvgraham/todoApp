const express = require('express');
const app = express();

const {todoRouter} = require('./routes');

app.use('/api/todos', todoRouter)

app.get('/', (req, res) => {
    res.send('server is working');
});

module.exports = app;