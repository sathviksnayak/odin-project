import fibsRec from "../src/fibo";

    test("returns the first n Fibonacci numbers in an array when n is 1 or greater", () => {
        expect(fibsRec(1)).toEqual([0])
        expect(fibsRec(3)).toEqual([0,1,1])
        expect(fibsRec(4)).toEqual([0,1,1,2])
        expect(fibsRec(5)).toEqual([0,1,1,2,3])
        expect(fibsRec(10)).toEqual([0,1,1,2,3,5,8,13,21,34])
    })