// function palindromeChecker(word) {
//   // var reversedWord = word.toLowerCase().split('').reverse().join('');
//   var lowerCaseWord = word.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
//   var arrayVersionOfWord = lowerCaseWord.split('');
//   var reversedWord = arrayVersionOfWord.reverse();
//   var joinedWord = reversedWord.join('');
//
//   word = word.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
//
//   if (word === joinedWord) {
//     return 'This is a palindrome!';
//   }
//
//   return 'this is not'
// }
// console.log(palindromeChecker('A man, a plan, a canal -- Panama'))



// function rampNumberChecker(num) {
//   var numString = num.toString();
//   var numArray = numString.split('');
//   for ( var i = 0; i < numArray.length; i++) {
//     if (numArray[i] > numArray[i + 1]) {
//       return 'nope';
//     }
//   }
//   return 'yup';
//   console.log(numArray);
// }
// console.log(rampNumberChecker(122333445));


// function greaterNum(numArray, num) {
//   var newArray = []
//   for (var i = 0; i < numArray.length; i++) {
//     if (numArray[i] > num) {
//       newArray.push(numArray[i]);
//     }
//   }
//   return newArray
// }
// console.log(greaterNum([1,2,3,4,5,6], 3));
