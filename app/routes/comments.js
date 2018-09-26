const app = module.exports = require('express')();
const commentModel = require('../models/comments');
const movieModel = require('../models/movies');


app.post('/', (req,res) => {
    let id = req.body.id;
    let comment = req.body.comment;
    if (id.length == 0 || comment.length == 0 ) {
        res.send('No id or comment')
    } else {
        //Check if movie id excists in db.
        movieModel.findOne({_id:id}, (err,data) => {
           err ?
           res.send('Failed to find movie in db') :
           '';
        }).then(() => {
            let newComment = new commentModel({
                ID:id,
                Comment:comment
            });
            newComment.save()
                    .then(item => {
                        res.send(item.Comment);
                    }).catch(err => {
                        res.send('Failed to save a comment');
                        console.log(err);
                    });   
        }).catch((err) => {
            res.send('No movie in db, you can`t comment on this');
            console.log(err);
        })
    }
})


app.get('/', (req,res) => {
    commentModel.find({}, (err,data) => {
        err ? 
        res.send('No data received, error occured', err) : 
        res.send('<pre>' + JSON.stringify(data, null, '  '));
    })
});

app.get('/:id', (req,res) => {
    let id = req.params.id;
    commentModel.find({ID:id}, (err,data) => {
        err ? 
        res.send('No comment received,  error occured', err) : 
        res.send('<pre>' + JSON.stringify(data, null, '  '));
    })
});