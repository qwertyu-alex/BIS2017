/*
function displayStuff() {
  var arr = [];
  var stuff = document.getElementsByTagName('input')
  for (var i = 0; i < (stuff.length); i++) {
    //hvis det er en radioknap
    if (stuff[i].name == "rating"){
    //  alert("rating foyund")
      if (stuff[i].checked == true){
        arr.push("Rating: " + stuff[i].value)
      //  alert("test")
      }
    } else if (stuff[i].value){arr.push(stuff[i].name + ": " + stuff[i].value)}
  }
  alert(arr.join("\n"))
}
*/


function displayForm() {
  var arr = [];
  //find the first form and return an array
  var stuff = document.forms[0];
  //loop through each element in the form
  for (var i = 0; i < (stuff.length); i++) {
    //hvis det er en radioknap
    if (stuff[i].name == "Rating"){
    //  alert("rating foyund")
      if (stuff[i].checked == true){
        arr.push("Rating: " + stuff[i].value)
      }
    } else if (stuff[i].value){
      arr.push(stuff[i].name + ": " + stuff[i].value)
    }
  }
  alert(arr.join("\n"))
}


// doesnt do anything
/*
function makeBox() {
  var div = document.createElement("DIV")
  document.getElementById("append").appendChild(div)
}*/


//change the color of the div depending on the error
function changeColor(error, message){
  var getDiv = document.getElementById("myBox");
  var getMessage = document
        .getElementById("message")
        .innerHTML = message;
  var getPara = document
        .getElementById("message");

  console.log("changeColor " + error);
  if (error){
      getDiv.style.backgroundColor = "#ff8787";
      getPara.style.visibility = "visible"
  } else {
      getDiv.style.backgroundColor = ""
      getPara.style.visibility = "hidden"
      displayForm()
  }

}

function check() {
  var error = 0;
  var radioCheck = 0;
  var message = "";


  //check to see if there is anything in the radiobuttons
  var stuff = document.forms[0];
  for (var i = 0; i < stuff.length; i++){
    if (stuff[i].checked == true){
      radioCheck = 1;
    }

    // gives error if one of the things are empty
    if (stuff[i].name) {
      if (!stuff[i].value){
      //  console.log("nothing in: " + stuff[i].name);
        error = 1;
        message += "nothing in: " + stuff[i].name + "\n </br>";
      }
    }
  }

  //show error if no radiobuttons
  if (!radioCheck) {
//    console.log("nothing in: radiobuttons");
    error = 1;
    message = "nothing in: radiobuttons \n </br>" + message;
  }

  //sends the error to change color
  changeColor(error, message);
  console.log(message);
  return false
  //console.log(error);

}
