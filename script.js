$(document).ready(function() {

  var input = "0";
  var accumilator = 0;
  var lastOpeartion = "";
  var pressEqual = 0;
  var inputOnEqual = "0";
  var repeatPressEqual = 0;
  var repetaPressMathOperation = 0;
  var displayAccumilator = 0;

  $("#ac").on("click", function() {

    input = "0";
    accumilator = 0;
    repeatPressEqual = 0;
    repetaPressMathOperation = 0;
    $("#display").text("0");

  });

  $("#ce").on("click", function() {

    input = "0";
    $("#display").text(input);

  });

  $("#backSpace").on("click", function() {

    input = input.slice(0, input.length - 1);

    $("#display").text(input);

  });


  $(".numberButton").on("click", function() {

    repeatPressEqual = 0;

    input = Number(input).toString();


    if (input == "0" || pressEqual == 1 || displayAccumilator == 1) {
      input = $(this).attr("value");
      pressEqual = 0;
      displayAccumilator = 0;
    } else {
      input = input.concat($(this).attr("value"));
    }

    if (input.length > 9) {
      input = parseFloat(input).toExponential(3);
    }
    $("#display").text(input);

  });

  $(".functionButton").on("click", function() {

    repeatPressEqual == 0;

    lastOpeartion = $(this).attr("value");

    if (repetaPressMathOperation == 0) {
      accumilator = parseFloat(input);
      repetaPressMathOperation = 1;
      $("#display").text(input);
    } else {
      mathOperation(lastOpeartion);
      if (accumilator.toString().length > 9) {
        accumilator = accumilator.toExponential(3);
      }
      $("#display").text(accumilator);
    }
    input = "0";

  });

  function mathOperation(Opeartion) {
    switch (Opeartion) {
      case "+":
        accumilator = (accumilator + parseFloat(input));
        break;
      case "x":
        accumilator = (accumilator * parseFloat(input));
        break;
      case "-":
        accumilator = (accumilator - parseFloat(input));
        break;
      case "/":
        accumilator = (accumilator / parseFloat(input));
        break;
      case "%":
        accumilator = (accumilator % parseInt(input));
        break;
    }
  }

  $("#equal").on("click", function() {

    if (repeatPressEqual == 1) {
      input = inputOnEqual;
    }

    mathOperation(lastOpeartion);
    inputOnEqual = input;
    input = accumilator.toString();

    repetaPressMathOperation = 0;
    repeatPressEqual = 1;
    displayAccumilator = 1;



    if (accumilator.toString().length > 9) {
      accumilator = accumilator.toExponential(3);
    }

    $("#display").text(accumilator);

  });



});
