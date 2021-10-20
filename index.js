
 function f1() {
 var y = document.getElementById('a').value;
 var x = document.getElementById('result');
    x.innerHTML = y;
}
 function f2() {
 var y = document.getElementById('b').value;
 var x = document.getElementById('tank');
    x.innerHTML = y;
}
function f3() {
 var y = document.getElementById('x').value;
  var x = document.getElementById('result');
    x.innerHTML = y;
    console.log(x);
}
function clockTick() {
  var currentTime = new Date(),
      day = currentTime.getDate(),
      month = currentTime.getMonth() + 1,
      year = currentTime.getFullYear(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes(),
      seconds = currentTime.getSeconds(),
      text = (day + "." + month + "." + year + ' ' + hours + ':' + minutes + ':' + seconds);
 
  document.getElementById('date').innerHTML = text;
}

setInterval(clockTick, 1000);

var cars = ["Saab", "Volvo", "BMW", "Daewo", "Volkswagen ", "Subaru", "Škoda","Audi"];
var listOfCars = [];
var list = document.getElementById("carsList");

cars.forEach(function(element) {
  listOfCars.push("<li>" + element + "</li>");
});

list.value = listOfCars.join('<br>');

function f4(){
  document.getElementById("carsList").innerHTML = listOfCars.join(' <br> ');
}
function f5(){
  var g = document.getElementById('a').value;
  var z = document.getElementById('carDistance');
     z.value = g;
  var k = document.getElementById("b").value;   
  var d = document.getElementById('carConsum');
      d.value = k; 
  var p = document.getElementById("x").value;   
  var r = document.getElementById('carAverage');
      r.value = p; 
}

