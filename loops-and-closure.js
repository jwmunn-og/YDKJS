// for (var i = 1; i <= 5; i++){
//   setTimeout( function timer(){
//     console.log(i);
//   }, i * 1000 );
// }
// 6 6 6 6 6

// for (var i = 1; i <= 5; i++){
//   (function(){ // IIFE creates new scope but doesn't do anything
//     setTimeout( function timer(){
//       console.log(i);
//     }, i * 1000 );
//   })();
// } 
// 6 6 6 6 6

// for (var i = 1; i <= 5; i++){
//   (function(){
//     var j = i; // needs to do something in new scope to be useful
//     setTimeout( function timer(){
//       console.log(j);
//     }, j * 1000 );
//   })();
// }
// 1 2 3 4 5

// for (var i = 1; i <= 5; i++){
//     let j = i; // block-scope for closure!
//     setTimeout( function timer(){
//       console.log(j);
//     }, j * 1000 );
// }
// 1 2 3 4 5

for (let i = 1; i <= 5; i++){ // block-scope created in head
    setTimeout( function timer(){
      console.log(i);
    }, i * 1000 );
}
// 1 2 3 4 5

