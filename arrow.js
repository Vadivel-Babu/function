let numArr = [1,2,3,4,5,6];
let odd = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 !== 0){
      console.log(arr[i]);
    }
  }
}
// odd(numArr)

const stringArray = ["hello world", "this is a test", "title case example"];
let capitalCase = (arr) => {
  let capitalStr;
  for (let i = 0; i < arr.length; i++) {
    let capital = arr[i].split(' ').map((str) => str[0].toUpperCase() + str.slice(1)).join(' ');
    capitalStr.push(capital);
  }
  console.log(capitalStr);    
}
// capitalCase(stringArray);

let sum = (arr) => {
  let total = arr.reduce(((prev,curr) => prev + curr), 0);
  console.log(total);
}
// sum(numArr);

let palindrom = (arr) => {
  let palindromArr = [];
  for (let i = 0; i < arr.length; i++) {
    let revStr = arr[i].split('').reverse().join('');

    if(arr[i] === revStr){
      palindromArr.push(arr[i])
    }
  }
 
 return palindromArr;
}
// palindrom(['hello','Babu','radar','madam']);

let isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (var i = 2;  i*i <= number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

let primeNumbers = (arr) => {
  let primArr = [];
  for (let i = 0; i < arr.length; i++) {
    if(isPrime(arr[i])){
      primArr.push(arr[i]);
    }   
  }
  return primArr;
}
primeNumbers(numArr);