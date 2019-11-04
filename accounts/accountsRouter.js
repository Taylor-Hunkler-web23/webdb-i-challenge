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
    db.select('*').from('accounts')
    .where('id', '=', req.params.id)
    .first()
        .then(account => {
            res.status(200).json(account)
        }).catch(error => {
            res.status(500).json({ error: 'Failed to get account' })
        })
});

//Delete
router.delete('/:id', (req, res) => {
    const changes = req.body;

    db('accounts')
    .where({id:req.params.id})
    .del()
    .then(count => {
            res.status(200).json(count);
        }).catch(error => {
            res.status(500).json({ error: 'Failed to delete account' })
        })
});

//PUT
router.put('/:id', (req, res) => {
    const changes = req.body;

    db('accounts')
    .where({id:req.params.id})
    .update(changes)
    .then(count => {
            res.status(200).json(count);
        }).catch(error => {
            res.status(500).json({ error: 'Failed to update account' })
        })
});
module.exports = router;