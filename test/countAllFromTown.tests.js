
let assert = require("assert");
let  countAllFromTown= require("../countAllFromTown");

describe('test CountAllFromTown', function () {
    it('should return 3 if the are three registration number from stellies', function () {
        assert.equal(fromStellies, 3)

    });

    it('should return 1 if the is one number from kuilsriver', function () {
        assert.equal(fromKuilsriver, 1)
    });
});

var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
assert.equal(fromStellies, 3)

var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');

assert.equal(fromKuilsriver, 1)
