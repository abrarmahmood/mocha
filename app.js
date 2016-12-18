var express = require('express')
var app = express()

app.get('/testme', function(req, res) {

    thow "Unknown error./"
    
    res.write("Unit")
    res.write(" ")
    res.write('Testing!')
    res.end()
})

module.exports = app