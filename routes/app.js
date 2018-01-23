var express = require('express');
var router = express.Router();
var Term = require('../models/query');
var scrapper = require('../scrapper').scrapper;
var fs = require('fs');
router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/search/:query', (req, res, next) => {
    let query = req.params.query;
    // var term = new Term({
    //     term: query
    // });
    Term.findOneAndUpdate({term: query}, {term: query}, {upsert: true}, (err, data) => {
        if(err) {
            console.log('error in saving query');
            return res.status(500).json({
                title: 'An error occurred while saving the query in db.',
                error: err
            });
        }
        if(!data) {
            console.log('Query saved');
            scrapper(query, req, res);
        }else {
            console.log('Query Already Exist. Please use recent tab.');
            return res.status(500).json({
                title: 'Query Already Exist. Please use recent tab.',
                error: { message: 'No scrapping is done'}
            });
        }
    });
    // term.save((err, data) => {
    //     if(err) {
    //         return res.status(500).json({
    //             title: 'An error occurred while saving the query in db.',
    //             error: err
    //         });
    //     }
    //     console.log('Term saved in db');
    // });
    // scrapper(query, req, res);

});

router.get('/getRecentQueries', (req, res, next) => {
    Term.find({}, {_id: 0, term: 1}, (err, data) => {
        if(err) {
            console.log('error in saving query');
            return res.status(500).json({
                title: 'An error occurred while saving the query in db.',
                error: err
            }); 
        }
        console.log(data);
        res.status(200).json({
            message: 'Query fetch success.',
            obj: data 
        });
    })
});

router.get('/recent/:folder', (req, res, next) => {
    let folder = req.params.folder;
    let path = `./public/images/${folder}/`;
    let url = `/images/${folder}/`
    fs.readdir(path, (err, items) => {
        if(err) {
          return res.status(500).json({
                title: 'error reading in folder',
                error: {message: 'Please search for this term again.', error: err} 
            });  
        }
        res.status(200).json({
            message: 'Images found.',
            obj: items.map((item) => `${url}${item}`)
        });
    }); 
});

module.exports = router;
