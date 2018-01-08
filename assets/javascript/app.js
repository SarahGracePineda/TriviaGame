var number = 45;
var intervalID;

function run() {

intervalId = setInterval(decrement, 1000);
console.log();

function decrement() {
number--;
$("#show-number").html("<h2>" + number + "</h2>");

if (number === 0) {

  stop();
  alert("Time Up!");

           }
         }
function stop() {
clearInterval(intervalId);
         }
       }
