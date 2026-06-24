import caesarCipher from '../src/caesarCipher'

test('caesarCipher',()=>{
    expect(caesarCipher('abc', 3)).toBe('def');
})

expect(caesarCipher('xyz', 3)).toBe('abc');

expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');

expect(caesarCipher('Hello, World!', 3))
  .toBe('Khoor, Zruog!');