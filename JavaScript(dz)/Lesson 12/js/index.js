let numeral = prompt("Ваше число: ");
let five = 5;

if (numeral % five == 0) {

    for (i = 0; i <= numeral; i++) {
        if (i % five == 0) {
            console.log(i);
        }

    }
}
else {
    console.log("Sorry, no numbers")
}
