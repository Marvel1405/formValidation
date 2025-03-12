function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  var x = document.forms["myForm"]["fpass"].value;
  if (x == "") {
    alert("Password must be filled out");
    return false;
  }
}
