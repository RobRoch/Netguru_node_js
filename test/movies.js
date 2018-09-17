// const { spawn } = require('child_process');
// const request = require('request');
// const test = require('tape');

// // Start the app
// const env = Object.assign({}, process.env, {PORT: 5000});
// const child = spawn('node', ['index.js'], {env});

// test('responds to requests', (t) => {
//   t.plan(4);
//   child.stdout.on('data', _ => {

//     request('http://127.0.0.1:5000', (error, response, body) => {
//       // stop the server
//       child.kill();

//       // No error
//       t.false(error);
//       // Successful response
//       t.equal(response.statusCode, 200);
//       // Assert content checks
//       t.notEqual(body.indexOf("<title>Node.js Getting Started on Heroku</title>"), -1);
//       t.notEqual(body.indexOf("Getting Started with Node on Heroku"), -1);
//     });
//   });
// });
// const assert = require('assert');
// const mocha = require('mocha');
// const chai = require('chai');

// const chaiHttp = require('chai-http');
// chai.use(chaiHttp);

// let should = chai.should();

describe('Movies', () => {
    describe('POST', () => {
        it('Should be valid');
        it('Body should contain only movie title');
        it('Should be validated');
        it('Based on passed title, data should be fetched');
        it('Movie details should be saved to database');
    })
    describe('GET' , () => {
        it('Response should include full movie object');
    })
});