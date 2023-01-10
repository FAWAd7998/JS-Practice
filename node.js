// // //create a function to add two variables
// // var cal = prompt("Please enter what type of calculation you want to do\n" +
// //   "if you want to add enter = 1\n" +
// //   "if you want to minus enter = 2\n" +
// //   "if you want to divide enter = 3\n" +
// //   "if you want to multiply enter = 4");

// // if (cal == 1) {
// //     var a = prompt("Please enter your first number");
// //     var b = prompt("please enter your second number");

// //     alert("The result is , " + (Number(a) + Number(b)));
// // }

// // else if (cal == 2) {
// //     var c = prompt("Please enter your first number");
// //     var d = prompt("please enter your second number");

// //     alert("the result is , " + (Number(c) - Number(d)));
// // }



// //creating clock using java script
// var span = document.getElementById('span');

// function time() {
//   var d = new Date();
//   var s = d.getSeconds();
//   var m = d.getMinutes();
//   var h = d.getHours();
//   span.textContent = 
//     ("0" + h).substring(-2) + ":" + ("0" + m).substring(-2) + ":" + ("0" + s).substring(-2);
// }

// setInterval(time, 1000);




// //creating clock using java script

function clock() {
    let now =  Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // ternary operator
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    let time = hours + ":" + minutes + ":" + seconds;
    
   
    document.getElementById("clock").innerHTML = time;
  }
  
  setInterval(clock, 1000);
  