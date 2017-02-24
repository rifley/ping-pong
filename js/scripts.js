

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
    if(inputSlice[i]%3===0) {
      holdMe.push("ping");
    }
    else {
      holdMe.push(inputSlice[i]);
    }
  console.log(holdMe);
  }
}

var factorFive = function(input) {
  var inputSlice = input.slice();
  var holdMe = [];
  for(var i=0; i < input.length; i++)
    if(inputSlice[i]%5===0) {
      holdMe.push("pong");
    }
    else {
      holdMe.push(inputSlice[i]);
    }
  console.log(holdMe);
}





$(function() {
 $("#formOne").submit(function(event) {
   event.preventDefault();
   userInput = $("#userInput").val();

   var inputArray = addTo(userInput);
   factorThree(inputArray);
   factorFive(inputArray);
  //  console.log(modInput);
  //  factorThree(userInput);
  //  console.log();

 });
});
