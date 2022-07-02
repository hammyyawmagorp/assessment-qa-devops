const {shuffleArray} = require('./utils')

describe('shuffleArray', () => {
    
    test('should return an array', () =>{
        expect(shuffleArray('food','drink')).toBe(['food', 'drink']);
    });


})