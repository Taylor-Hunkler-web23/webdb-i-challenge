const express = require('express');

const db = require('../data/dbConfig.js');

const router = express.Router();

//GET accounts
router.get('/', (req, res) => {

    db.select('*').from('accounts').then(accounts => {
        res.status(200).json(accounts)
    }).catch(error => {
        res.status(500).json({ error: 'Fail to get accounts' })
    })

});


//POST account
router.post('/', (req, res) => {
    db.insert(req.body, 'id')
        .into('accounts')
        .then(ids => {
            res.status(200).json(ids)
        }).catch(error => {
            res.status(500).json({ error: 'Fail to post account' })
        })
});

//GET account by id
router.get('/:id', (req, res) => {
    db.select('*').from('accounts').where('id', '=', req.params.id)
        .then(account => {
            res.status(200).json(account)
        }).catch(error => {
            res.status(500).json({ error: 'Failed to get account' })
        })
});
module.exports = router;