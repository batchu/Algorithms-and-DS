function perm(arr, l, r) {
    if (l == r) {
        console.log(arr)
        return
    }
    for (let i = l; i < arr.length; i++) {
        let a1 = swap(arr, l,i)
        perm(a1, l + 1, r)
    }
}

function swap(arr,l,r){
    let res = [...arr]
    let temp = res[l]
    res[l]=res[r]
    res[r]=temp
    return res
}
console.log("Calculating permutations...")
perm("123".split(''), 0, 2)