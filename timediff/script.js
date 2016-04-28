var b = document.querySelector("#b");
var startDiv = document.querySelector("#start");
var stopDiv = document.querySelector("#stop");
var diffDiv = document.querySelector("#diff");

var startTime = 0;

var start = function(){
  var date = new Date();
  startTime = date.getTime();
  
  b.innerHTML = "Stop";
  startDiv.innerHTML = "Started: " + date.toLocaleTimeString();
  stopDiv.innerHTML = "Stopped: ---";
  diffDiv.innerHTML = "Difference: ---";
};

var stop = function(){
  var date = new Date();
  var endTime = date.getTime();
  var diffTime = endTime - startTime;
  startTime = 0;
  
  b.innerHTML = "Start";
  stopDiv.innerHTML = "Stopped: " + date.toLocaleTimeString();
  diffDiv.innerHTML = "Difference: " + (diffTime / 1000) + " s";
};

var f = function(){
  if(startTime == 0)
    start();
  else
    stop();
};
