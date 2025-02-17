const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Learn Third_Party_Libraries');
});

const _ = require('lodash');

app.get('/lodash', (req, res) => {
    const numbers = [1, 2, 3, 4, 5];
    const doubled = _.map(numbers, num => num * 2);
    res.json(doubled);
});

const moment = require('moment');

app.get('/date', (req, res) => {
    const now = moment().format('MMMM Do YYYY, h:mm:ss a');
    res.send(`Current date and time: ${now}`);
});

app.get('/async/callback', (req, res) => {
    setTimeout(() => {
        res.send('Asynchronous callback task completed!');
    }, 2000);
});

app.get('/async/promise', (req, res) => {
    new Promise((resolve) => {
        setTimeout(() => {
            resolve('Asynchronous promise task completed!');
        }, 2000);
    }).then(message => res.send(message));
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});