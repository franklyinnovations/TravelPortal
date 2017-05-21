// Simple async test for HTTP 200 response code using supertest
'use strict';

var request = require("supertest"),
    app = require("../app/_services/search.service.ts");

describe('GET /', function(){
  it('expects HTTP response 200', function(done){
    request(app)
     .getAll('binod','binod')
	 .expect("getall", done); 
  });
});