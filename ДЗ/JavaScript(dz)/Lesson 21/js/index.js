const view = `<i class="fas fa-eye-slash icon-password view"></i>`
function show_hide_password(target) {
  let input = document.getElementById("password-input");
  if (input.getAttribute("type") == "password") {
    target.classList.add("view");

    input.setAttribute("type", "text");
  } else {
    // target.classList.remove("view");
    input.setAttribute("type", "password");
  }
  return false;
}


function show_hide_password2(target) {
	let input = document.getElementById("password-input2");
	if (input.getAttribute("type") == "password") {
	//   target.classList.add("view");
	  input.setAttribute("type", "text");
	} else {
	//   target.classList.remove("view");
	  input.setAttribute("type", "password");
	}
	return false;
  }

  