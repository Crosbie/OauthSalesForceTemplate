//acceptance tests
var request = require("request");

var baseUrl = "http://127.0.0.1:8002/cloud/";

exports.testHi = function(test, assert){
  request({url: baseUrl + "hi", json: true}, function(err, response, body){
    console.log("body", body);
    assert.isNull(err);
    assert.match(body.text, /hi/i);
    test.finish();
  });
};