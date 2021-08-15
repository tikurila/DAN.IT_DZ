let value1 = +prompt("Введите первое значение: ");
let symbols = prompt("Введите символ: (+, -, *, /)");
let value2 = +prompt("Введите второе значение: ");


if (symbols == "+") {
    alert(value1 + value2);
};
if (symbols == "-") {
    alert(value1 - value2);
};
if (symbols == "*") {
    alert(value1 * value2);
};
if (symbols == "/") {
    alert(value1 / value2);
};
