// Generated by CoffeeScript 1.9.1
var Foo, Parser, foo, p, processWithSleep, processWithSleep2;

Foo = (function() {
  function Foo(arg) {
    this.a = arg.a, this.b = arg.b, this.c = arg.c;
  }

  return Foo;

})();

foo = new Foo({
  a: 1,
  b: 2,
  c: 3
});

console.log(foo.b);

Parser = (function() {
  function Parser() {}

  Parser.prototype.parse = function(content, arg) {
    var optionA, optionB, ref;
    ref = arg != null ? arg : {}, optionA = ref.optionA, optionB = ref.optionB;
    if (optionA == null) {
      optionA = false;
    }
    if (optionB == null) {
      optionB = false;
    }
    return console.log(content + " and options " + optionA + " " + optionB);
  };

  return Parser;

})();

p = new Parser;

p.parse('this is it', {
  optionA: 'zet',
  optionB: 'xy'
});

processWithSleep = function(p, sleepTime) {
  console.log(p);
  return console.log(sleepTime);
};

processWithSleep2 = (function(_this) {
  return function(p, sleepTime) {
    console.log(p);
    return console.log(sleepTime);
  };
})(this);
