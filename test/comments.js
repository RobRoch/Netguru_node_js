const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const movieModel = require('../app/models/movies');
const PORT = process.env.PORT || 5000;
const HOST = `http://localhost:${PORT}`;

// const movieModel = require('../app/models/movies');

describe('COMMENTS', function() {
    describe('POST', function() {
        //TODO
    })
    describe('GET' , function() {

        it('should pass when get all comments', function(done) {
            request(HOST).get('/comments')
                .expect(200)
                .end(function(err, res) {
                    if (err) return done(err);
                    done();
                });
        });

        it('should pass when movie id is valid', function(done) {
            //ID from mongodb comments.
            request(HOST).get('/comments/5ba3eb1e420c7e37e896ec24')
                .expect(200)                
                .end(function(err, res) {
                    if (err) return done(err);
                    done();
                });
        });
    })
});