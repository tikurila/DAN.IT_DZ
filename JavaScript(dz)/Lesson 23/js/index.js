let colorBody = document.querySelector("body");
let colorNav = document.getElementById("navChange");
let colorRa = document.getElementById("change-ra");
let colorMda = document.getElementById("change-mda");
let colorMenu = document.getElementById("change-menu");
let colorText = document.getElementById("change-text");
let colorFooter = document.getElementById("change-footer");
let button = document.getElementById("but");

button.addEventListener("click", function () {
  localStorage.setItem(
    "keyTheme",
    (localStorage.getItem("keyTheme") || "changeTheme") === "changeTheme"
      ? "returnTheme"
      : "changeTheme"
  );
  localStorage.getItem("keyTheme") === "changeTheme"
    ? change_theme()
    : return_theme();
});
document.addEventListener("DOMContentLoaded", () => {
  (localStorage.getItem("keyTheme") || "changeTheme") === "changeTheme"
    ? change_theme()
    : return_theme();
});

function change_theme() {
  colorBody.classList.add("background-body");
  colorNav.classList.remove("topnav");
  colorNav.classList.add("color-nav");
  colorRa.classList.remove("ramda");
  colorRa.classList.add("color-ra");
  colorMda.classList.remove("blue");
  colorMda.classList.add("color-mda");
  colorMenu.classList.remove("vertical-menu");
  colorMenu.classList.add("color-menu");
  colorText.classList.add("con-text");
  colorText.classList.add("color-text");
  colorFooter.classList.remove("footer");
  colorFooter.classList.add("color-footer");
}

function return_theme() {
  colorBody.classList.remove("background-body");
  colorNav.classList.remove("color-nav");
  colorNav.classList.add("topnav");
  colorRa.classList.remove("color-ra");
  colorRa.classList.add("ramda");
  colorMda.classList.remove("color-mda");
  colorMda.classList.add("blue");
  colorMenu.classList.remove("color-menu");
  colorMenu.classList.add("vertical-menu");
  colorText.classList.remove("con-text");
  colorText.classList.remove("color-text");
  colorFooter.classList.remove("color-footer");
  colorFooter.classList.add("footer");
}
