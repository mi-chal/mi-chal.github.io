(function myCalculator() {

  var display = document.getElementById("display-line");

  function addListenerToClearBtn() {
    var clear = document.getElementById("clear-btn");
    function eraseScreen() {
      return display.innerHTML = "";
    };
    clear.addEventListener("click", eraseScreen);
  };

  function addListenerToNumberBtns() {
    var numbers = document.getElementsByClassName("numbers");
    for (i=0; i<numbers.length; i++) {
      numbers[i].addEventListener("click", function(event) {
        return display.innerHTML += event.target.innerText;
      });
    };
  };

  function addListenerToOperatorBtns() {
    var operators = document.getElementsByClassName("operators");
    for (i=0; i<operators.length; i++) {
      operators[i].addEventListener("click", function(event) {
        return display.innerHTML += event.target.innerText;
      });
    };
  };

  function addListenerToEqualsBtn() {
    var equals = document.getElementById("equals-btn")
    function calculateEquation() {
      var result = eval(display.innerHTML);
      return display.innerHTML = result;
    };
    equals.addEventListener("click", calculateEquation);
  };
  addListenerToClearBtn();
  addListenerToNumberBtns();
  addListenerToOperatorBtns();
  addListenerToEqualsBtn();
})();

