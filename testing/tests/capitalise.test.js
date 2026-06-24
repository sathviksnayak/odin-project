import capitalize from '../src/capitalize';

test('capitalizes first letter', ()=>{
    expect(capitalize('hello')).toBe('Hello');
})