const books = [
  {
    author: "Скотт Бэккер",
    name: "Тьма, что приходит прежде",
    price: 70,
  },
  {
    author: "Скотт Бэккер",
    name: "Воин-пророк",
  },
  {
    name: "Тысячекратная мысль",
    price: 70,
  },
  {
    author: "Скотт Бэккер",
    name: "Нечестивый Консульт",
    price: 70,
  },
  {
    author: "Дарья Донцова",
    name: "Детектив на диете",
    price: 40,
  },
  {
    author: "Дарья Донцова",
    name: "Дед Снегур и Морозочка",
  },
];

let root = document.getElementById("root");

let ul = document.createElement("ul");
root.appendChild(ul);
let aut = "автор";
let pri = "цена";

try {
  for (let key in books) {
    if (books[key].author && books[key].name && books[key].price) {
      let li = document.createElement("li");
      li.innerHTML =
        books[key].author +
        "</br>" +
        books[key].name +
        "</br>" +
        books[key].price;
      ul.appendChild(li);
    }
    if (books[key].author == undefined) {
    }
    if (books[key].price == undefined) {
    }
  }

  throw new Error("Нет: " + "  " + `${aut}` + "  " + `${pri}`);
} catch (e) {
  console.log(e.message);
}
