$(function() {
 $("#formOne").submit(function(event) {
   event.preventDefault();
   input = $("#userInput").val();
   console.log(input);

 });
});
