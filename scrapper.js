module.exports = {
    scrapper : (query, req, response) => {
                    var Scraper = require ('images-scraper'),
                    scraper = require('./scraper_logic'),
                    google = new Scraper.Google(),
                    fs = require('fs'),
                    Jimp = require("jimp");
                    // request = require('request'),
                    // rp = require('request-promise'),
                    // sharp = require('sharp');

                    // var transformer = sharp()
                    // .resize(300)
                    // .toColourspace('b-w');

                    // var download = function(uri, filename, callback){
                    //     request.head(uri, function(err, res, body){  
                    //         request(uri)
                    //         .on('response', (response) => {
                    //             if(response.statusCode != 200) {
                    //                 return console.log('image fetch error!');
                    //             }
                    //         })
                    //         .on('error', function(err) {
                    //             return console.log(err)
                    //          })
                    //         // .pipe(transformer)
                    //         .pipe(fs.createWriteStream(filename))
                    //         .on('close', callback);
                    //     });
                    // };
                    // var download = function(image){
                    //     var ext = image.type.substring(6);
                    //         console.log(`${image.url}\n`);
                    //         var dir = `./public/images/${query}/`;
                    //         var path = `${dir}${Math.floor((Math.random() * 10000) + 1).toString()}.${ext}`;
                    //         if (!fs.existsSync(dir)){
                    //             fs.mkdirSync(dir);
                    //         }
                    //     return new Promise((resolve, reject) => {
                    //         request.head(image.url, function(err, res, body){
                    //             if(err) {
                    //                 console.log('Request error!');
                    //                 reject();
                    //             }  
                    //             var imageStream = request(image.url)
                    //             .on('response', (response) => {
                    //                 if(response.statusCode != 200) {
                    //                     console.log('image fetch error!');
                    //                     reject();
                    //                 }
                    //             })
                    //             .on('error', function(err) {
                    //                 console.log(err)
                    //                 reject();
                    //              })
                    //             // .pipe(transformer)
                    //             .pipe(fs.createWriteStream(path))
                    //             .on('close', () =>{
                    //                 console.log('done: '+path);

                    //                 resolve();
                    //             });
                    //         });
                    //     });
                    // };
                    var download = function(image) {
                        var ext = image.type.substring(6);
                                console.log(`${image.url}\n`);
                                var dir = `./public/images/${query}/`;
                                var path = `${dir}${Math.floor((Math.random() * 10000) + 1).toString()}.${ext}`;
                                if (!fs.existsSync('./public/images/')){
                                    fs.mkdirSync('./public/images/');
                                }
                                if (!fs.existsSync(dir)){
                                    fs.mkdirSync(dir);
                                } 
                                return new Promise((resolve, reject) => {
                                    Jimp.read(image.url).then(function (img) {
                                        img.quality(60)
                                            .greyscale()
                                            .write(path);
                                            resolve('final image saved');
                                    }).catch(function (err) {
                                        console.log('Image download failed');
                                        reject('error final image not saved');
                                    });
                                });
                            }
                    
                    scraper.fetch(
                        { q: query, tbm: 'isch' }
                    ).then((res) => {
                        console.log('first 15 results from google', res);
                        var ac = res.map(download);
                        var final = Promise.all(ac);
                        final.then((msg) => {
                            console.log(msg);
                            return response.status(200).json({
                                message: 'Scrapping and image processing success',
                                obj: null
                            }); 
                        }, (msg) => {
                            console.log(msg);
                        });
                        response.status(200).json({
                            message: 'Scrapping and image processing success',
                            obj: null
                        });
                    }).catch((err) => {
                        console.log('err', err);
                        response.status(500).json({
                            title: 'An error occurred while scrapping',
                            error: err
                        })
                    })
                    
                }
        }