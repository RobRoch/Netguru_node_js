const app = module.exports = require('express')();
const requestPromise = require('request-promise');
const config = require('../../config');
const movieAction = require('../actions/movies');
const movieModel = require('../models/movies');

const mongo = require('mongodb');

app.get('/', (req, res) => {
    //Get all data using mongoose schema, simply render.
    movieModel.find({}, (err,data) => {
        if(err) {
            return res.send('No data received, error occured');
        }
        res.send('<pre>' + JSON.stringify(data, null, '  '));
    })
});

app.post('/', (req,res) => {
    //Validate given title.
    if(req.body.title.length > 0) {
        var title = encodeURI(req.body.title);
    } else {
        res.send('No title was given');
    }
    
    // Use omdb url to receive data, then makes new model and saves to db. If success, data is displayed.
    // Search only by movie title. 
    let url = config.movieHttp +'?t='+ title + '&apikey=' + config.movieApi;
    let jsonData;

    requestPromise(url, (err, response, body) => {
        if(!err && response.statusCode == 200){
            jsonData = JSON.parse(body);
        };
    }).then(() => {
        let movie = new movieModel(jsonData);
        movie.save()
            .then(item =>{
                res.send(jsonData);
            }).catch(err => {
                res.status(400).send("Unable to save to database");
            });
    })

    
})
