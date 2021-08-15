const inp = document.getElementById("input");
const err = "Please enter correct price";
const btn = `<button type="reset" onclick="deletevalue()">X</button>`;

input.addEventListener("focusin", () => input.classList.add("color-focused"));
input.addEventListener("focusout", () => input.classList.remove("color-focused"));
  
inp.onblur = function () {
  if (inp.value >= 0) {
    inp.classList.remove("invalid"); //удаление красного бордера
    error.classList.add("del-value"); //удаление текста о ошибке
    span.classList.remove("del-value"); //отключение класса удаление спан
    span.innerHTML = `Текущая цена: ${inp.value}` + "" + `${btn}`;
    inp.classList.add("color-input"); //окрашивание поля ввода в зеленый цвет :)
  } else if (inp.value < 0) {
    span.classList.add("del-value"); //удаление спан и кнопки
    error.classList.remove("del-value"); //октлючение класса удаления текста ошибки
    inp.classList.remove("color-input"); //удаление зеленого фона инпута
    inp.classList.add("invalid"); //добавление красного бордера
    error.innerHTML = `${err}`;
    error.classList.add("text-invalid"); //окрашивание текста об ошибке в красный
  }
};

function deletevalue() {
  span.classList.add("del-value"); //удаление текущей цены
  inp.classList.remove("color-input"); //удаление зеленого фона
}
