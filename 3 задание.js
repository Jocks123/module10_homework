function reverseString(str) {
    var newString = "";
    for (var i =str.leght -1; i >= 0; i--){
        newString += str[i]
    }
    return newString
}

reverseString("Hello")