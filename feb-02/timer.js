let minute_value = 5;
let second_value = 59;
let miliSec_value = 10;
let miliSec_running = true;

let time_id = setInterval(function () {
  condition();
  output();
  end1();
}, 100);


// Stop Function

document.getElementById("stop_btn").addEventListener("click", function () {
  clearInterval(time_id);
  miliSec_running = false;
});


// Resume Function

document.getElementById("resume_btn").addEventListener("click", function () {
  if (miliSec_running == false) {
    time_id = setInterval(function () {
      condition();
      output();
      end1();
    }, 100);
  }
});


// Restart Function

document.getElementById("reset_btn").addEventListener("click", function () {
   if((miliSec_value === 0) || (second_value === 0) || (minute_value === 0) ||
    (miliSec_value !== 0) || (second_value !== 0) || (minute_value !== 0)) {
      minute_value = 4;
      second_value = 59;
      miliSec_value = 9;
      let miliSec_running2 = true;

      let time_id2 = setInterval(function () {
         condition();
         output();
         end2();
       }, 100);

       document.getElementById("stop_btn").addEventListener("click", function () {
         clearInterval(time_id2);
         miliSec_running2 = false;
       });
       
       
       // Resume Function
       
       document.getElementById("resume_btn").addEventListener("click", function () {
         if (miliSec_running2 == false) {
           time_id2 = setInterval(function () {
             condition();
             output();
             end2();
           }, 100);
         }
       });       
   }
});



function condition() {
  miliSec_value = miliSec_value - 1;
  if (miliSec_value === -1) {
    second_value = second_value - 1;
    miliSec_value = 9;
    if (second_value === -1) {
      minute_value = minute_value - 1;
      second_value = 59;
    }
  }
}

function output() {
  document.getElementById("miliSec").innerText = "0" + miliSec_value + " mS";

  if (second_value.toString().length === 1) {
    document.getElementById("second").innerText = "0" + second_value + " Sec";
  } else {
    document.getElementById("second").innerText = second_value + " Sec";
  }

  document.getElementById("minute").innerText = "0" + minute_value + " min";
}

function end1() {
  if ((minute_value === 0) && (second_value === 0) && (miliSec_value === 0)) {
    clearInterval(time_id);
  }
}

function end2() {
   if ((minute_value === 0) && (second_value === 0) && (miliSec_value === 0)) {
      clearInterval(time_id2);
   }
 }