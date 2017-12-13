import sum  from '../../lib/src/sum';

describe('sum', function(){
    it('should return sum of a and b', function(){
        const result = sum(10, 2);

        expect(result).toBe(12);
    });
});
