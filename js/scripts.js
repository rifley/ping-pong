// Business Logic
var addTo = function(input) {
  var total = 0;
  var holdMe = [];
  for(var i = 0; i < input; i++) {
    total += 1;
    holdMe.push(total);
  }
  return holdMe;
}

var factorThree = function(input) {
  var inputSlice = input.slice();
  var holdMe = [];
  for(var i=0; i < input.length; i++) {
    if((inputSlice[i]%3===0) && (inputSlice[i]%15!==0)){
      holdMe.push("ping");
    }
    else {
      holdMe.push(inputSlice[i]);
    }
  }
  return holdMe;
}

var factorFive = function(input) {
  var inputSlice = input.slice();
  var holdMe = [];
  for(var i=0; i < input.length; i++)
    if((inputSlice[i]%5===0) && (inputSlice[i]%15!==0)) {
      holdMe.push("pong");
    }
    else {
      holdMe.push(inputSlice[i]);
    }
  return holdMe;
}

var factorFifteen = function(input) {
  var inputSlice = input.slice();
  var holdMe = [];
  for(var i=0; i < input.length; i++)
    if(inputSlice[i]%15===0) {
      holdMe.push("ping-pong");
    }
    else {
      holdMe.push(inputSlice[i]);
    }
  return holdMe;
}

var spitOut = function(input) {
  for (var i = 0; i < input.length; i++) {
    $("#userOutput").append("<li class='output'>"+input[i]+"</li>")
  }
  $("#userOutput").append("<br>");
}
// business logic end

// User logic
$(function() {
 $("#formOne").submit(function(event) {
   event.preventDefault();
   $("#userOutput").empty();
   userInput = $("#userInput").val();

   var inputArray = addTo(userInput);
   var partOne = factorThree(inputArray);
   var partTwo = factorFive(partOne);
   var partThree = factorFifteen(partTwo);
   spitOut(partThree);

 });
});
