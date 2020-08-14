let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe('The countAllFromTown function' , function(){
    it('should return registration numbers that is for that CL town' , function(){
        assert.equal(2, countAllFromTown('CL 124 ,CL 345, CJ 341,CY 789', 'CL'))
    });

    it('should not return a registration because the is no CA town' , function(){
        assert.equal(0, countAllFromTown("CL 124,CY 567,CL 345, CJ 456,CL 341','CA'"));
    });

    it('should return a registration number that is for  CY town' , function(){
        assert.equal(3, countAllFromTown("CY 124,CY 567,CL 345, CJ 456,CY 341",'CY'));
    });

});