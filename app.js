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

function validateEmail() {
  const email = document.getElementById("email");
  //regular expression
  const re = /^([a-zA-z0-9_\-\.]+)@([a-zA-z0-9_\-\.]+)\.([a-zA-z]{2,5})$/;
  //Validate email with re
  if (re.test(email.value)) {
    email.classList.remove("is-invalid");
  } else {
    email.classList.add("is-invalid");
  }
}

function validatePhone() {
  const phone = document.getElementById("phone");
  //regular expression
  const re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
  //validate using re
  if (re.test(phone.value)) {
    phone.classList.remove("is-invalid");
  } else {
    phone.classList.add("is-invalid");
  }
}
