let numArr = [1,2,3,4,5,6];
// (function(arr){
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 !== 0){
//       console.log(arr[i]);
//     }
//   }
// })(numArr)


// const stringArray = ["hello world", "this is a test", "title case example"];
// (function(arr){
//   let capitalStr = [];
//   for (let i = 0; i < arr.length; i++) {
//    let capital = arr[i].split(' ').map((str) => str[0].toUpperCase() + str.slice(1)).join(' ');
//    capitalStr.push(capital);
//   }
//   console.log(capitalStr);    
// })(stringArray)

// (function(arr){
//   let total = arr.reduce(((prev,curr) => prev + curr), 0);
//   console.log(total);
// })(numArr);

// (function(arr){
//   let palindromArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let revStr = arr[i].split('').reverse().join('');

//     if(arr[i] === revStr){
//       palindromArr.push(arr[i])
//     }
//   }
 
//  console.log(palindromArr);
// })(['hello','Babu','radar','madam']);

// (function(arr,k){
//   for (let i = 0; i < (k % arr.length); i++) {
//     let temp = arr.pop()
//     arr.unshift(temp);        
//   }
//   console.log(arr);
// })(numArr,2);

// (function(arr){
//   let org = arr.filter((val,i) => arr.indexOf(val) === i);
//   console.log(org);
// })([1,2,6,7,7,7,2,1])

// (function(arr1,arr2){
//   let mergeArr = arr1.concat(arr2);
//   if(mergeArr.length % 2 === 0){
//     let median= Math.floor((mergeArr[mergeArr.length/2 -1] + mergeArr[mergeArr.length/2])/2);
//     console.log(median);
//   }
// })([1,2,3],[4,6,7])

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

// (function(arr){
//   let primArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if(isPrime(arr[i])){
//       primArr.push(arr[i]);
//     }   
//   }
//   return primArr;
// })(numArr);