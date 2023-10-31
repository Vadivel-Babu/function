let numArr = [1,2,3,4,5,6];
let odd = function(arr){
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 !== 0){
      console.log(arr[i]);
    }
  }
}

// odd(numArr)
const stringArray = ["hello world", "this is a test", "title case example"];
let capitalCase = function(arr){
  let capitalStr;
  for (let i = 0; i < arr.length; i++) {
    let capital = arr[i].split(' ').map((str) => str[0].toUpperCase() + str.slice(1)).join(' ');
    capitalStr.push(capital);
  }
  console.log(capitalStr);    
}
// capitalCase(stringArray);
let sum = function(arr){
  let total = arr.reduce(((prev,curr) => prev + curr), 0);
  console.log(total);
}
// sum(numArr);

let palindrom = function(arr){
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

let rotate = function(arr,k){
  for (let i = 0; i < (k % arr.length); i++) {
    let temp = arr.pop()
    arr.unshift(temp);        
  }
  console.log(arr);
}
// rotate([1,2,3,4,5],3)

let duplicate = function(arr){
 let org = arr.filter((val,i) => arr.indexOf(val) === i);
  console.log(org);
}
// duplicate([1,2,3,4,5,6,3,2,4])

let median = function(arr1,arr2){
  let mergeArr = arr1.concat(arr2);
  if(mergeArr.length % 2 === 0){
    return Math.floor((mergeArr[mergeArr.length/2 -1] + mergeArr[mergeArr.length/2])/2);
  }
}

// median([1,2,3],[6,7,8]);

let isPrime = function (number) {
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

let primeNumbers = function(arr){
  let primArr = [];
  for (let i = 0; i < arr.length; i++) {
    if(isPrime(arr[i])){
      primArr.push(arr[i]);
    }   
  }
  return primArr;
}
primeNumbers(numArr);