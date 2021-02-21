
function task1() {
  let enterNumber = +prompt("Введите число");

  function radiusNumber() {
    if (!Number.isNaN(enterNumber)) {
      return enterNumber;
    } else {
      alert("вы ввели не число");
      return false;
    }
  }
  radiusNumber();

  function findRadius() {
    let s = Math.PI * Math.pow(enterNumber, 2);
    console.log('площадь круга: ' + s);
  }
  findRadius();

  function circumference() {
    let c = 2 * Math.PI * enterNumber;
    console.log('длина окружности: ' + c);
  }
  circumference();

  function average() {
    let a = +prompt("Введите первое число");
    let b = +prompt("Введите второе число");
    if (Number.isNaN(a) || Number.isNaN(b)) {
      alert("Вы ввели не число");
    } else {
      let sumAverage = (a + b) / 2;
      console.log(sumAverage);
    }
  }
  average();
}
// task1();

function calc() {
  let symbol = prompt("введите символ + - * / % ^");
  //я не понимаю, как верно сделать проверку,
  //пробовала это, не вышло
  //   if (symbol === "+"||"-"||"*"||"/"||"%"||"^"){
  //     return symbol;
  //   }else{
  //     console.log("try again");
  //     return false;
  let x = +prompt("введите число");
  let y = +prompt("введите еще одно");
  let action = 0;

  if (symbol === "+") {
    action = x + y;
    console.log(action);
  }
  if (symbol === "-") {
    action = x - y;
    console.log(action);
  }
  if (symbol === "*") {
    action = x * y;
    console.log(action);
  }
  if (symbol === "/") {
    action = x / y;
    console.log(action);
  }
  if (symbol === "%") {
    action = x % y;
    console.log(action);
  }
  if (symbol === "^") {
    action = Math.pow(x, y);
    console.log(action);
  }
}
// calc();

