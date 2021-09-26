 function myfunction() {
  var fever, cough, bodypain, msg;
  var fever = prompt("Are you feverish?", "yes");
  var cough = prompt("Do you have a cough?", "yes");
  var bodypain = prompt("Do you have bodypain?", "yes");

  if (fever == "yes") {
    if (cough == "yes") {
      if (bodypain == "yes") {
        msg = "You need to consult a doctor, as soon as possible!";
        
        document.getElementById("demo").innerHTML = msg;
      } else if (bodypain == "no") {
        msg =
          "If you feel pukish or get a body pain please connect with a doctor!";
        document.getElementById("demo").innerHTML = msg;
      } else {
        msg = "I could not really catch that";
        document.getElementById("demo").innerHTML = msg;
      }
    } else if (cough == "no") {
      if (bodypain == "yes") {
        msg =
          "Maybe the body pain is just due to fever!";
        document.getElementById("demo").innerHTML = msg;
      } else if (bodypain == "no") {
        msg = "Dont worry it's just cough";
        document.getElementById("demo").innerHTML = msg;
      } else {
        msg = "I could not really catch that";
        document.getElementById("demo").innerHTML = msg;
      }
    }
  } else if (fever == "no") {
    if (cough == "yes") {
      if (bodypain == "yes") {
        msg =
          "Rest well, if there is no improvement in health contact a doctor";
        document.getElementById("demo").innerHTML = msg;
      } else if (bodypain == "no") {
        msg =
          "If you feel pukish or get a body pain or fever please connect with a doctor!";
        document.getElementById("demo").innerHTML = msg;
      } else {
        msg = "I could not really catch that";
        document.getElementById("demo").innerHTML = msg;
      }
    } else if (cough == "no") {
      if (bodypain == "yes") {
        msg =
          "Maybe the body pain is due to exersion!";
        document.getElementById("demo").innerHTML = msg;
      } else if (bodypain == "no") {
        msg = "You are perfectly fine";
        document.getElementById("demo").innerHTML = msg;
      } else {
        msg = "I could not really catch that";
        document.getElementById("demo").innerHTML = msg;
      }
    }
  } else {
    msg = "I could not really catch that";
    document.getElementById("demo").innerHTML = msg;
  }
}