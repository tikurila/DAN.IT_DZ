let arr = ['hello', 19, 'world', 24, 12, '23', null];
let newArr = [];
let type = prompt("Введите тип данных: ");
function filterBy(array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == type) {
            newArr.push(array[i]);
        }
    }
    console.log(newArr);
}
filterBy(arr);