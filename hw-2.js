var letters = [];
var str = String("september october november");
var newStr = str.split(" ");
for (i = 0; i < newStr.length; i++) {
  letters += newStr[i].slice(0, 1);
}
console.log(letters);
son;

function check(param) {
  var newDate = new Date();
  return typeof param === "number"
    ? `${newDate.toLocaleString()}`
    : "Неверный тип данных";
}
check("35");
("Неверный тип данных");
check(35);
("06.05.2019, 14:16:58");
