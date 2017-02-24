// Business Logic
var addUp = function(input) {
  var total = 0;
  var holdInput = [];
  for(var i = 0; i < input; i++) {
    total += 1;
    holdInput.push(total);
  }
  return holdInput;
}

var factor = function(input) {
  var inputSlice = input.slice();
  var holdInput = [];
  for(var i=0; i < input.length; i++) {
    if((inputSlice[i]%3===0) && (inputSlice[i]%15!==0)){
      holdInput.push("ping");
    }
    else if((inputSlice[i]%5===0) && (inputSlice[i]%15!==0)){
      holdInput.push("pong");
    }
    else if(inputSlice[i]%15===0) {
      holdInput.push("ping-pong");
    }
    else {
      holdInput.push(inputSlice[i]);
    }
  }
  return holdInput;
}

var htmlOut = function(input) {
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

   var inputArray = addUp(userInput);
   var outputArray = factor(inputArray);
   htmlOut(outputArray);

 });
});
