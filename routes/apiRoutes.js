
const router = require('express').Router();

const { readFromFile, readAndAppend } = require('../helper/fsUtils');


router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


router.post('/notes', (req, res) => {

    const {title, text} = req.body;

    if (title && text) {
        const textContent = {
            title,
            text,
        };

        readAndAppend(textContent, './db/db.json');

        const response = {
            status: 'victory',
            body: textContent,
        };

        res.json(response);
    } else {
        res.json('Not today kid');
    }
});


module.exports = router;