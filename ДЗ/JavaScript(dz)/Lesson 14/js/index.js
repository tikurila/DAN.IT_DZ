
let firstname = prompt("Ввести имя: ");
let lastname = prompt("Ввести фамилию: ");


function createNewUser() {
    let newUser = {
        firstChar: firstname.substr(0, 1).toLowerCase(),
    }

    alert(newUser.firstChar + lastname.toLowerCase());
}

createNewUser();