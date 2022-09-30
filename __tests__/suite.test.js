const { hard } = require('../exercise');

test('Testing the function exercise', () => { 
    expect(hard([1,2,3,3], [3,4,5,6], [50,10,20,70])).toBeDefined();
    expect(hard([1,2,3,3], [3,4,5,6], [50,10,20,70])).toBe(120);
    expect(hard([1,2,3,4,6], [3,5,10,6,9], [20,20,100,70,60])).toBe(150);
    expect(hard([1,1,1], [2,3,4], [5,6,4])).toBe(6);
 })