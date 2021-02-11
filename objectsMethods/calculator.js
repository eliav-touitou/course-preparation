let calculator = {
  sum() {
    return this.a + this.b;
  },
  sum() {
    return this.a * this.b;
  },
  read() {
    this.a = +prompt("a");
    this.b = +prompt("b");
  },
};
calculator.read();
alert(calculator.mul());
alert(calculator.sum());
