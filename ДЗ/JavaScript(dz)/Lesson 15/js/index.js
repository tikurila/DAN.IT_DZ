function createNewUser() {
    const firstname = prompt("Ввести имя: ");
    const lastname = prompt("Ввести фамилию: ");
    const birthday = prompt("Введите дату рождения(dd.mm.yyyy) ");

    function getPassword() {
        const newUser = {
            firstChar: firstname.substr(0, 1).toUpperCase()
        }
        console.log(newUser.firstChar + lastname.toLowerCase() + date.getFullYear());
    }

    let text = birthday;
    let date = new Date(text.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));

    function getAge() {
        let now = new Date();
        let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        let dob = date;
        let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
        let age;

        age = today.getFullYear() - dob.getFullYear();
        if (today < dobnow) {
            age = age - 1;
        }
        console.log(`${age}`);

    }

    getAge();
    getPassword();

}
createNewUser();



