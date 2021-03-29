let eyeClose = document.getElementById("hide-icon");
let input = document.getElementById("password-input");
let inputComfirm = document.getElementById("confirm_password");
let eyeCloseConfirm = document.getElementById("hide-icon2");
let error = document.getElementById("error");
error.textContent = "";
// модальное окно
let modal = document.getElementById("my_modal");
let span = document.getElementsByClassName("close_modal_window")[0];
let closemodal = document.getElementById("close");

function password() {
  if (input.getAttribute("type") == "password") {
    input.setAttribute("type", "text");
    eyeClose.classList.add("hide-icon");
  } else {
    eyeClose.classList.remove("hide-icon");
    input.setAttribute("type", "password");
  }
}

function confirm_password() {
  if (inputComfirm.getAttribute("type") == "password") {
    inputComfirm.setAttribute("type", "text");
    eyeCloseConfirm.classList.add("hide-icon");
  } else {
    eyeCloseConfirm.classList.remove("hide-icon");
    inputComfirm.setAttribute("type", "password");
  }
}

function password_compare() {
  if (
    input.value == inputComfirm.value &&
    input.value != "" &&
    inputComfirm.value != ""
  ) {
    error.classList.remove("error");
    modal.style.display = "block";
    closemodal.style.display = "block";
    clearinput();
    error.classList.add("hide-icon");
  } else if (input.value != inputComfirm.value) {
    error.classList.remove("hide-icon");
    error.innerHTML = "Нужно ввести одинаковые значения";
    error.classList.add("error");
  }
}

function closewindow() {
  closemodal.style.display = "none";
}

function clearinput() {
  input.value = "";
  inputComfirm.value = "";
}
