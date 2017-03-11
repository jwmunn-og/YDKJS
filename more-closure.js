function foo(){
  var a = 2;

  // bar() has lexical scope access to the inner scope of foo()
  function bar(){ 
    console.log(a);
  }
  return bar; // pass the function bar() and return as a value
}
var baz = foo(); // assigns the value returned by executing foo();

// invokes inner function bar() but executes it OUTSIDE it's lexical scope
baz(); // 2, whoa that is some observable closure.