let assert = require("assert");
let  greet = require("../greet");



describe('Test my greet function' , function(){
    it(' should return hello neighbour' , function(){
        assert.equal(greet('neighbour'), 'Hello, neighbour');

    });
    it('should return hello if no name has passed' , function(){
        assert.equal( greet(''), 'Hello, ');

    });
    
});