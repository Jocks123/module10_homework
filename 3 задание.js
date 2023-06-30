function reverseString(str) {
    let charArray = str.split(""); // Преобразовать строку в массив символов
    charArray.reverse(); // Изменить порядок символов в массиве
    let reversedString = charArray.join(""); // Преобразовать массив обратно в строку
    return reversedString;
  }
  reverseString("Hello");