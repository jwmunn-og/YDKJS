function foo(){
  var a = 2;

  function bar(){
    console.log(a);
  }
  bar(); // has closure over foo(); because it appears nested inside foo();
}
foo();