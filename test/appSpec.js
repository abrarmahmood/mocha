var should = require('should')
var supertest = require('supertest')
var app = require('../app')

describe('myUnitTest', function () {

    it('should pass', function (done) {
        done()
    })

    it('should not pass', function(done) {
        // throw "don't pass"
        done()
    })

    it('should return the home page', function(done) {
        supertest(app)
        .get('/testme')
        .expect(200)
        .end(function(err, res) {
            res.status.should.equal(200);
            done()
        })
    })
})