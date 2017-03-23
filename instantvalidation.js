function register(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  window.alert("Username: " + userEntered + "\n" + "Password: " + passEntered);

  if(userEntered.length>=6){
    document.getElementById("usernameGroup").classList.add("has-success");
    document.getElementById("usernameGroup").classList.remove("has-error");
    document.getElementById("usernameError").classList.remove("shown-message");
  }

  else{
    document.getElementById("usernameGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success");
    document.getElementById("usernameSuccess").innerHTML="invalid username.";

    document.getElementById("usernameError").innerHTML="Username must be at least 6 characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add ("shown-message");
    document.getElementById("usernameError").classList.remove("shown-message");
  }
  if (userEntered.indexOf(" ")>0) {
    document.getElementById("usernameGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success");
    document.getElementById("usernameSuccess").innerHTML="invalid username.";

    document.getElementById("usernameError").innerHTML="Username may not contain spaces.";
    document.getElementById("usernameError").classList.remove ("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
  }
else{
  document.getElementById("usernameGroup").classList.add("has-success");
}    document.getElementById("usernameGroup").classList.remove("has-error");

if (passEntered == "password"){
  document.getElementById("passwordGroup").classList.add("has-error");
  document.getElementById("passwordGroup").classList.remove("has-success");

  document.getElementById("passwordError").innerHTML="Password may not be password.";
  document.getElementById("passwordError").classList.remove ("hidden-message");
  document.getElementById("passwordError").classList.add ("shown-message");
}
else{
  document.getElementById("passwordGroup").classList.add ("has-success");
  document.getElementById("passwordGroup").classList.remove("has-error");

}
if (passEntered==userEntered){
  document.getElementById("passwordGroup").classList.add ("has-error");
  document.getElementById("passwordGroup").classList.remove("has-success");

  document.getElementById("passwordError").innerHTML="Password and Username must be different.";
  document.getElementById("passwordError").classList.remove ("hidden-message");
  document.getElementById("passwordError").classList.add  ("shown-message");
}
else{
  document.getElementById("passwordGroup").classList.add("has-success");
  document.getElementById("passwordGroup").classList.remove("has-error");

}
if(passEntered.length>=6){
  document.getElementById("passwordGroup").classList.add("has-success");
  document.getElementById("passwordGroup").classList.remove("has-error");
}
else{
  document.getElementById("passwordGroup").classList.add("has-error");
  document.getElementById("passwordGroup").classList.remove("has-success");

  document.getElementById("passwordError").innerHTML="Password must be between 6 and 20 characters.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
}

}

function validateUsername(){
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  if(userEntered.length>=6){
    document.getElementById("usernameGroup").classList.add("has-success");
    document.getElementById("usernameGroup").classList.remove("has-error");
  }
  else{
    document.getElementById("usernameGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success");
    document.getElementById("usernameSuccess").innerHTML="invalid username.";

    document.getElementById("usernameError").innerHTML="Username must be at least 6 characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add ("shown-message");
  }
  if (userEntered.indexOf(" ")>0) {
    document.getElementById("usernameGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success");
    document.getElementById("usernameSuccess").innerHTML="invalid username.";

    document.getElementById("usernameError").innerHTML="Username may not contain spaces.";
    document.getElementById("usernameError").classList.remove ("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
  }
else{
  document.getElementById("usernameGroup").classList.add("has-success");
}    document.getElementById("usernameGroup").classList.remove("has-error");


}
function validatePassword(){
  var passEntered = document.getElementById("pass").value;
  var userEntered = document.getElementById("user").value;

  if (passEntered == "password"){
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("passwordGroup").classList.remove("has-success");

    document.getElementById("passwordError").innerHTML="Password may not be password.";
    document.getElementById("passwordError").classList.remove ("hidden-message");
    document.getElementById("passwordError").classList.add ("shown-message");
  }
  else{
    document.getElementById("passwordGroup").classList.add ("has-success");
    document.getElementById("passwordGroup").classList.remove("has-error");

  }
  if (passEntered==userEntered){
    document.getElementById("passwordGroup").classList.add ("has-error");

    document.getElementById("passwordError").innerHTML="Password and Username must be different.";
    document.getElementById("passwordError").classList.remove ("hidden-message");
    document.getElementById("passwordError").classList.add  ("shown-message");
  }
  else{
    document.getElementById("passwordGroup").classList.add("has-success");
    document.getElementById("passwordGroup").classList.remove("has-error");


  }
  if(passEntered.length>=6){
    document.getElementById("passwordGroup").classList.add("has-success");
    document.getElementById("passwordGroup").classList.remove("has-error");
  }
  else{
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("passwordGroup").classList.remove("has-success");

    document.getElementById("passwordError").innerHTML="Password must be between 6 and 20 characters.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");

    }

}
