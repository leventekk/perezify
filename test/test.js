const assert = require('assert');
const perezify = require('../index');

describe('perezify', () => {
    it('should work with strings', done => {
        assert.equal(perezify('testing perezify'), 'TESTING PEREZIFY');
        done();
    });

    it('should work with numbers', done => {
        assert.equal(perezify('1234'), '1234');
        done();
    });

    it('should work with strings and numbers mixed', done => {
        assert.equal(perezify('1234 testing perezify'), '1234 TESTING PEREZIFY');
        done();
    });
});