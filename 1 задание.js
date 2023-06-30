let input = prompt("Введите число:");
if (input === null) {
  console.log("Ввод отменён");
} else {
  let a = parseFloat(input.trim());
  if (isNaN(a)) {
    console.log("Упс, кажется, вы ошиблись");
  } else if (Number.isInteger(a)) {
    if (a % 2 === 0) {
      console.log("Четное");
    } else {
      console.log("Нечетное");
    }
  } else {
    console.log("Введено нецелое число");
  }
}