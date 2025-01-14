// Analyze this code, what will be the output ?

[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
});
//applying map method on array of numbers;
//callback function recieves a number and then:
// -if type of number argument is number - returns number multiplied on 2
// -else returns undefined
// expression being asigned to some variable returns new array of numbers - [2, 4, 6]