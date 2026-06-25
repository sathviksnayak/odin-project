export const mergeSort = (arr) => {
    if(!Array.isArray(arr)) {throw new Error("The input must be an array")}
    if(!arr.every((number) => typeof number === "number")) {throw new Error("The array must include only numbers")}

    if(arr.length < 2) return arr

    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
    let sortedArr = []
    let i = 0
    let j= 0

    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            sortedArr.push(left[i])
            i++
        }
        else {
            sortedArr.push(right[j])
            j++
        }
    }

    return [...sortedArr, ...left.slice(i), ...right.slice(j)]
}