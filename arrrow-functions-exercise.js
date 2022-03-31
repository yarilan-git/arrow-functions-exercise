
// Exercise 1 - origianl code 
// --------------------------

function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

//   Exercise 1 - solution 
//   --------------------------

  let double = arr => arr.map(val => val * 2)


//   Exercise 2 - origianl code 
//   --------------------------

  function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

//   Exercise 2 - solution 
//   --------------------------
 
    let result = numbers => {
        let square = numbers.map(num => num ** 2);    
        let evens = square.filter(square => square % 2 === 0);    
        return evens;
    }

  