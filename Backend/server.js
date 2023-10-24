// const express = require('express');
import express from "express";  //Module JS

const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is ready');
// });

// get a list of 5 Jokes

app.get('/jokes', (req,res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'second joke',
            content: 'This is second joke'
        },
        {
            id: 3,
            title: 'Third joke',
            content: 'This is a joke of third no'
        },
        {
            id: 4,
            title: 'Fourth joke',
            content: 'This is a joke but forth'
        },
        {
            id: 5,
            title: 'Fifth joke',
            content: 'This is a joke but fifth'
        },

    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});