const user = {
  name: "dave",
  age: 30,
};
function A() {
  return user;
}
function B() {
  return user;
}
alert(new A() == new B());
