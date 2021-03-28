window.onload = function () {
  tabContent = document.getElementsByClassName("tabContent");
  tabstitle = document.getElementsByClassName("tabstitle");
  hideTabsContent(1);
};

function hideTabsContent(a) {
  for (let i = a; i < tabContent.length; i++) {
    tabContent[i].classList.remove("show");
    tabContent[i].classList.add("hide");
    tabstitle[i].classList.remove("whiteborder");
  }
}

document.getElementById("tabsid").onclick = function (event) {
  let target = event.target;
  if (target.className == "tabstitle") {
    for (let i = 0; i < tabstitle.length; i++) {
      if (target == tabstitle[i]) {
        showTabsContent(i);
        break;
      }
    }
  }
};

function showTabsContent(b){
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tabstitle[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}