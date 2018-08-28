/**
* MIT License
*
* Copyright (c) 2018-present, Walmart Inc.,
*
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*
*/
var MidwayServer = require('../../resources/run-mock-server-api-dynamic.js');
var Expect = require('chai').expect;
var servers = MidwayServer.getServers();

servers.forEach(function (server) {
  describe('header-test - ' + server.app, function () {

    it('check rest API setMockID exists and id can be set', function (done) {
      server
      .get('/api/testHeaders')
      .expect('Content-type', /json/)
      .end(function (err, res) {
        Expect(err).to.equal(null);
        Expect(res.status).to.equal(200);
        Expect(res.headers.header1).to.equal('test1');
        Expect(res.headers.header2).to.equal('test2');
        Expect(res.headers.header3).to.equal('true');
        Expect(res.body.test).to.equal('I am header test');
        done();
      });
    });
  });
});
