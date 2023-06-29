const arr =[3,3,3,3,3,3];
let check = true
for (i = 0; i < arr.length; i++) {
    if (arr[0] !== arr[i]) {
        check = false
    }
}

console.log(check)