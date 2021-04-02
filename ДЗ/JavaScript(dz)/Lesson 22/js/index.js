let images = ["/img/1.jpg", "/img/2.jpg", "/img/3.jpeg", "/img/4.png"],
  length = images.length,
  index = 1;
timer();
function slide() {
  if (index == length) {
    index = 0;
  }
  document.getElementById("imgAll").src = images[index++];
}
function timer() {
  timerId = setInterval(slide, 1000);
}

function stopslider() {
  clearInterval(timerId);
}
function goslider() {
  timer();

}
