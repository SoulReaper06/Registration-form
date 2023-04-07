function validateForm() {
  let name = document.forms["myForm"]["fname"].value;
  let phoneno = document.forms["myForm"]["phoneno"].value;
  let password = document.forms["myForm"]["password"].value;
  let cnfpassword = document.forms["myForm"]["cnfpassword"].value;
  if (name.length < 5) {
    alert("Name must have more than 5 characters");
    return false;
  }
  if (phoneno == "123456789" || phoneno.length != 10) {
    alert("Not a valid phone number");
    return false;
  }

  if (password == "password" || password == name || password.length < 8) {
    alert("Not a valid password");
    return false;
  }

  if (password != cnfpassword ) {
    alert("Confirm Password does not match");
    return false;
  }
  
  
  
}