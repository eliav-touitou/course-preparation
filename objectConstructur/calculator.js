function Calculator() {
  this.read = function () {
    this.firstNumber = +prompt("Enter first number");
    this.secondNumber = +prompt("Enter second number");
  };
  this.sum = function () {
    return this.firstNumber + this.secondNumber;
  };
  this.mul = function () {
    return this.firstNumber * this.secondNumber;
  };
}
let calculator = new Calculator();
Calculator.read();
alert("Sum =" + calculator.sum());
alert("Mul =" + calculator.mul());
