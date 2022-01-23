// Storing the Different IDs of 4 buttons within variables
var a = document.getElementById("btn-1");
var b = document.getElementById("btn-2");
var c = document.getElementById("btn-3");
var d = document.getElementById("btn-4");


// Making the function
// Function for Insta Div 1
function buttonResponse1() {
    if (a.style.color == "grey") {
      a.style.color = "#FF0000";
    } else {
      a.style.color = "grey";
    }
}

// Function for Insta Div 2
function buttonResponse2() {
  if (b.style.color == "grey") {
    b.style.color = "#FF0000";
  } else {
    b.style.color = "grey";
  }
}

// Function for Insta Div 3
function buttonResponse3() {
  if (c.style.color == "grey") {
    c.style.color = "#FF0000";
  } else {
    c.style.color = "grey";
  }
}

// Function for Insta Div 4
function buttonResponse4() {
  if (d.style.color == "grey") {
    d.style.color = "#FF0000";
  } else {
    d.style.color = "grey";
  }
}


// Calling the functions for 4 different Indta Divs
a.addEventListener('click', buttonResponse1);   //Insta Div 1
b.addEventListener('click', buttonResponse2);    //Insta Div 2
c.addEventListener('click', buttonResponse3);   //Insta Div 3
d.addEventListener('click', buttonResponse4);   //Insta Div 4

