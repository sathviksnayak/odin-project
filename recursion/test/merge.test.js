import { mergeSort } from "../src/merge"

    
  
    
    test("correctly sorts an array with duplicates", () => {
        expect(mergeSort([3,1,4,3,1,5,9,3,6])).toEqual([1,1,3,3,3,4,5,6,9])
    })

    test("correctly sorts an array with negative numbers", () => {
        expect(mergeSort([1,-2,3,-4,-1,1,5])).toEqual([-4,-2,-1,1,1,3,5])
    })

    test("correctly sorts a descending array", () => {
        expect(mergeSort([9,8,7,6])).toEqual([6,7,8,9])
    })

    test("sort",()=>{
        expect(mergeSort([1,-1,2,5,3,10,7])).toEqual([-1,1,2,3,5,7,10])
    })