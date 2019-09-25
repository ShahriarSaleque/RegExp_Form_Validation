//Form blur event listeners
document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("zip").addEventListener("blur", validateZip);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);

function validateName() {
  const name = document.getElementById("name");
  //regular expression
  const re = /^[a-zA-z]{2,20}$/;
  //validate name with re
  if (re.test(name.value)) {
    name.classList.remove("is-invalid");
  } else {
    name.classList.add("is-invalid");
  }
}

function validateZip() {
  const zip = document.getElementById("zip");
  //regular expression
  const re = /^[0-9]{5}(-[0-9]{4})?$/;
  if (re.test(zip.value)) {
    zip.classList.remove("is-invalid");
  } else {
    zip.classList.add("is-invalid");
  }
}
