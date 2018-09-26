const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const PORT = process.env.PORT || 5000;
const HOST = `http://localhost:${PORT}`;
// const movieModel = require('../app/models/movies');

describe('Movies', function() {
    describe('POST', function() {
        it('should get valid data and return 200 when saved to db', function(done){
            request(HOST).post('/movies')
                .send({title:'spiderman'})
                .expect(200)
                .end(function(err, res) {
                    if (err) return done(err);
                    done();
                });
        });

        it('should get an error when invalid data' , function(done) {
            request(HOST).post('/movies')
                .send({abc:'test'})
                .expect(500)
                .end(function(err, res) {
                    if (err) return done(err);
                    done();
                });
        })
    })
    describe('GET' , function() {

        it('should pass when get all movies', function(done) {
            request(HOST).get('/movies')
                .expect(200)
                .end(function(err, res) {
                    if (err) return done(err);
                    done();
                });
        });

    })
});