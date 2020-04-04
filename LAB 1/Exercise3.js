/*Write two functions that use Promises that you can chain! The first function, makeUpperCase(),
will take in an array of words and capitalize them, and then the second function, sortWords(), will
sort the words in alphabetical order. If the array contains anything but strings, it should throw an
error.*/

const arrayOfNames=['jaxx','tiny','clay']
const mixedArray=['anarchy',99,true]

const makeUpperCase = (arrays) => 
  new Promise ((resolve, reject) => {
    if (arrays.every(array => typeof array === 'string')){
      resolve(arrays.map(array => array.toUpperCase()))
    } else {
      reject('Error: Not all the items in the array are strings!')
    }
  })

const sortWords = (arrays) => {
  return arrays.sort((a, b) => {
    if (a > b){
      return 1
    } else {
      return -1
    }
  })
}

makeUpperCase(arrayOfNames)
  .then(arrays=>sortWords(arrays))
  .then(result => console.log(result))
  .catch(error => console.log(error))
  
  makeUpperCase(mixedArray)
  .then(arrays=>sortWords(arrays))
  .then(result => console.log(result))
  .catch(error => console.log(error))