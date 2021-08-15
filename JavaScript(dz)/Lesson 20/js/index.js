let tabsId = document.getElementById("tabsid"); //для 16 строки
let tabContent = document.getElementsByClassName("tabContent");
let tabstitle = document.getElementsByClassName("tabstitle");

hideTabsContent(1); //Количество текста 

function hideTabsContent(a) {
  for (let i = a; i < tabContent.length; i++) {
    tabContent[i].classList.remove("show");
    tabContent[i].classList.add("hide");
    tabstitle[i].classList.remove("whiteborder");
  }
}
tabsId.onclick = function (event) {
  let target = event.target;
  if (target.className == "tabstitle") {
    for (let i = 0; i < tabstitle.length; i++) {
      if (target == tabstitle[i]) {
        showTabsContent(i);
      }
    }
  }
};
function showTabsContent(i) {
  if (tabContent[i].classList.contains("hide")) {
    hideTabsContent(0);
    tabstitle[i].classList.add("whiteborder");
    tabContent[i].classList.remove("hide");
    tabContent[i].classList.add("show");
  }
}
