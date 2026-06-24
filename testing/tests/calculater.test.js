import calculator from '../src/calculator';

test('adds numbers', ()=>{
    expect(calculator.add(2,3)).toBe(5)
});
test('subtract numbers', ()=>{
    expect(calculator.subtract(5,3)).toBe(2)
})
test('mutiplies numbers',()=>{
    expect(calculator.multiply(5,3)).toBe(15)
})
test('divids numbers', ()=>{
    expect(calculator.divide(6,2)).toBe(3)
})