let Error = document.getElementsByClassName("error1");
let Msg = " Please Provide your Username";
function validate() {
  if (document.MyForm.username.value == "") {
    alert(Msg);
    document.MyForm.username.focus();
    return false;
  }
  if (document.MyForm.email.value == "") {
    alert(" Please provide your email");
    document.MyForm.email.focus();
    return false;
  }
  if (document.MyForm.password.value == "") {
    alert("Please provide your password");
    document.MyForm.password.focus();
    return false;
  }
  return true;
}
