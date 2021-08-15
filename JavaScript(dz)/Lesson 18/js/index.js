const btn = document.getElementsByClassName("btn");

window.addEventListener("keydown", handler);

function handler(er) {
  if (er.key == "Enter") {
    btn[0].style.backgroundColor = "blue";
    btn[1].style.backgroundColor = "black";
    btn[2].style.backgroundColor = "black";
    btn[3].style.backgroundColor = "black";
    btn[4].style.backgroundColor = "black";
    btn[5].style.backgroundColor = "black";
    btn[6].style.backgroundColor = "black";
  }
  if (er.key == "s") {
    btn[1].style.backgroundColor = "blue";
    btn[0].style.backgroundColor = "black";
    btn[2].style.backgroundColor = "black";
    btn[3].style.backgroundColor = "black";
    btn[4].style.backgroundColor = "black";
    btn[5].style.backgroundColor = "black";
    btn[6].style.backgroundColor = "black";
  }
  if (er.key == "e") {
    btn[2].style.backgroundColor = "blue";
    btn[1].style.backgroundColor = "black";
    btn[0].style.backgroundColor = "black";
    btn[3].style.backgroundColor = "black";
    btn[4].style.backgroundColor = "black";
    btn[5].style.backgroundColor = "black";
    btn[6].style.backgroundColor = "black";
  }
  if (er.key == "o") {
    btn[3].style.backgroundColor = "blue";
    btn[1].style.backgroundColor = "black";
    btn[2].style.backgroundColor = "black";
    btn[0].style.backgroundColor = "black";
    btn[4].style.backgroundColor = "black";
    btn[5].style.backgroundColor = "black";
    btn[6].style.backgroundColor = "black";
  }
  if (er.key == "n") {
    btn[4].style.backgroundColor = "blue";
    btn[1].style.backgroundColor = "black";
    btn[2].style.backgroundColor = "black";
    btn[3].style.backgroundColor = "black";
    btn[0].style.backgroundColor = "black";
    btn[5].style.backgroundColor = "black";
    btn[6].style.backgroundColor = "black";
  }
  if (er.key == "l") {
    btn[5].style.backgroundColor = "blue";
    btn[1].style.backgroundColor = "black";
    btn[2].style.backgroundColor = "black";
    btn[3].style.backgroundColor = "black";
    btn[4].style.backgroundColor = "black";
    btn[0].style.backgroundColor = "black";
    btn[6].style.backgroundColor = "black";
  }
  if (er.key == "z") {
    btn[6].style.backgroundColor = "blue";
    btn[1].style.backgroundColor = "black";
    btn[2].style.backgroundColor = "black";
    btn[3].style.backgroundColor = "black";
    btn[4].style.backgroundColor = "black";
    btn[5].style.backgroundColor = "black";
    btn[0].style.backgroundColor = "black";
  }
}
