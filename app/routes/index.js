const app = module.exports = require('express')();

app.get('/', (req, res) => {
    res.render('pages/index');
});



app.use('/movies', require('./movies'));
app.use('/comments', require('./comments'));

app.all('*', (req,res) => {
    res.status(400).send({msg: 'Page not found'});
});
