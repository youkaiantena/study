// Generated by CoffeeScript 1.9.1

/*
this is comments
that is comment.
 */
var A, B, a, a1, arr, arr2, array, array2, array3, b, b1, c1, d1, f, f0, f1, f2, fill, fill2, fill3, i, j, name, obj, obj2, ref, text;

name = 'youkaiantena';

'#{name}';

"my name is " + name;

text = "aaa\n" + 'bbb' + "\nccc";


/*
function arguments test
 */

fill = function(container, liquid) {
  if (liquid == null) {
    liquid = 'coffee';
  }
  return "Filling the " + container + " with " + liquid + "...";
};

fill2 = function(container, liquid) {
  if (liquid == null) {
    liquid = liquid ? 'coffee' : void 0;
  }
  return "Filling the " + container + " with " + liquid + "...";
};

fill3 = function(container, liquid) {
  if (liquid == null) {
    liquid = liquid != null ? 'coffee' : void 0;
  }
  return "Filling the " + container + " with " + liquid + "...";
};


/*
array test
 */

array = [1, 2, 3];

array2 = [1, 2, 3];

array3 = [1, 2, 3];

[1, 2, 3];

[0, 1, 2];


/*
array slice test
 */

arr = [0, 1, 2, 3];

for (i = j = 0, ref = arr.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
  console.log(i);
}

arr2 = ['a', 'b', 'c', 'd', 'e'];

arr2.slice(1, 4);

arr2.slice(3);


/*
object test
 */

obj = {
  a: 1,
  b: 2,
  c: 3
};

obj2 = {
  a: 4,
  b: 5,
  c: 6,
  d: 7,
  e: 8
};

f0 = function() {
  return func({
    a: 1,
    b: 2
  });
};


/*
object on scope
 */

a = 3;

b = 2;

obj = {
  a: a,
  b: b,
  c: 1
};

f = function() {
  this.a = 3;
  this.b = 2;
  return obj = {
    a: this.a,
    b: this.b,
    c: 1
  };
};


/*
?
 */

a1 = function() {
  var _a;
  console.log(_a = typeof null !== "undefined" && null !== null ? null : true);
  return _a;
};

b1 = function() {
  var _b;
  console.log(_b = void 0 != null ? void 0 : true);
  return _b;
};

c1 = function() {
  var _c, ref1;
  console.log(_c = (ref1 = {}) != null ? ref1 : true);
  return _c;
};

d1 = function() {
  var _d;
  console.log(_d = typeof false !== "undefined" && false !== null ? false : {});
  return _d;
};


/*
console.log a1()
console.log b1()
console.log c1()
console.log d1()
 */

f1 = function(arg) {
  var a, b, c;
  a = arg.a, b = arg.b, c = arg.c;
  return b;
};

console.log("f1 " + (f1({
  a: 1,
  b: 2,
  c: 3
})));

f2 = function(arg) {
  var a, b, c, ref1;
  ref1 = arg != null ? arg : {}, a = ref1.a, b = ref1.b, c = ref1.c;
  return a;
};

console.log("f2 " + (f2({
  a: 1,
  b: 2,
  c: 3
})));

console.log("f2_2 " + (f2()));

A = (function() {
  function A() {}

  A.method = function() {
    return console.log('@method called');
  };

  return A;

})();

A.method();

B = (function() {
  function B() {}

  B.prototype.method = function() {
    return console.log('method called');
  };

  return B;

})();

B.prototype.method();
