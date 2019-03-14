/**
 * bind
 * call
 * apply
 **/
function person(name) {
  this.name = name;
}

function animal(name) {
  this.name = name;
}

function bird(name) {
  this.name = name;
}

function print(arg1, arg2) {
  console.log(this.name, arg1, arg2);
}

let a = new person("A");
let b = new animal("B");
let c = new bird("C");

print.bind(c)("c1", "c2");
print.call(a, "a1", "a2");
print.apply(b, ["a1", "a2"]);
