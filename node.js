// //create a function to add two variables
// var cal = prompt("Please enter what type of calculation you want to do\n" +
//   "if you want to add enter = 1\n" +
//   "if you want to minus enter = 2\n" +
//   "if you want to divide enter = 3\n" +
//   "if you want to multiply enter = 4");
// // plus
// if (cal == 1) {
//     var a = prompt("Please enter your first number");
//     var b = prompt("please enter your second number");

//     alert("The result is , " + (Number(a) + Number(b)));
// }

// else if (cal == 2) {
//     var c = prompt("Please enter your first number");
//     var d = prompt("please enter your second number");

//     alert("the result is , " + (Number(c) - Number(d)));
// }

// else if (cal == 3) {
//     var e = prompt("Please enter your first number");
//     var f = prompt("please enter your second number");

//     alert("The result is , " + (Number(e) * Number(f)));
// }

// else if (cal == 4) {
//     var g = prompt("Please enter your first number");
//     var h = prompt("please enter your second number");

//     alert("the result is , " + Math.floor(Number(g) / Number(h)));
// }

// else {
//  alert("Please enter valid number");
// //  let i= prompt($[cal]);
// }

// // //creating clock using java script
// // var span = document.getElementById('span');

// // function time() {
// //   var d = new Date();
// //   var s = d.getSeconds();
// //   var m = d.getMinutes();
// //   var h = d.getHours();
// //   span.textContent =
// //     ("0" + h).substring(-2) + ":" + ("0" + m).substring(-2) + ":" + ("0" + s).substring(-2);
// // }

// // setInterval(time, 1000);

//creating clock using java script
// function clocktime() {
// 	let now = new Date();
// 	let hours = now.getHours();
// 	let minutes = now.getMinutes();
// 	let seconds = now.getSeconds();

// 	// ternary operator
// 	let aa = hours < 12 ? "0" + hours : hours;
// 	let bb = minutes < 10 ? "0" + minutes : minutes;
// 	let cc = seconds < 10 ? "0" + seconds : seconds;

// 	let time = aa + ":" + bb + ":" + cc;
// 	console.log(typeof time);

// 	document.getElementById("clock").innerHTML = time;
// }

// setInterval(clocktime, 1000);

//  let a= new Date();
//   console.log( Date.toLocaleString('en-US', {
//       hour12: false,
//     }))

// var date = new Date();
// document.getElementById("clock").innerHTML = date.toLocaleString("en-in");
// // console.log());

// var options = { hour12: false };
// console.log(date.toLocaleString('en-US', options));

function time() {
	let a = new Date();
	let hours = a.getHours();
	let minutes = a.getMinutes();
	let seconds = a.getSeconds();
	let milisec = a.getMilliseconds();

	let aa = hours < 10 ? "0" + hours : hours;
	let bb = minutes < 10 ? "0" + minutes : minutes;
	let cc = seconds < 10 ? "0" + seconds : seconds;
	let ee = milisec < 10 ? "0" + milisec : milisec;
    console.log(time);

	let dd = aa + ":" + bb + ":" + cc + ":" + ee;

	document.getElementById("clock").innerHTML = dd;
}

setInterval(time, 1000);
