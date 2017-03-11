// let is bound to the block scope
{
  let j;
  for (j=0; j<10; j++){
    let i = j; // rebound for each iteration
    console.log(i);
  }
}

// const throws error when reassigned later
var foo = true;
if (foo) {
  var a = 2;
  const b = 3;

  a = 3;
  b = 4;
}

console.log(a); // Just fine
console.log(b); // Throws error