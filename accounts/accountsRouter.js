const express = require('express');

const db = require('../data/dbConfig.js');

const router = express.Router();


router.get('/', (req, res) => {
    // list of posts
    // SELECT * form Posts
    //returns a promise
    db.select ('*') .from ('accounts').then(accounts => {
    res.status(200).json(accounts)
    }).catch (error =>{
        res.status(500).json({error: 'Fail to get'})
    })
    
    });

    router.post('/', (req, res) => {
        db.insert(req.body, 'id') 
        .into('accounts')
        .then(ids => {
            res.status(200).json(ids)
            }).catch (error =>{
                res.status(500).json({error: 'Fail to get'})
            })
        });
module.exports = router;