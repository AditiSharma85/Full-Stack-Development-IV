/*Write a function compareNumToTen that takes a number as an argument and returns a
Promise that tests and rejects if the value is less than or resolves if greater than the value 10.*/

var compareNumtoTen = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(`${num} is greater than 10, success!`);
        } else {
            reject(`${num} is less than 10, error!`);
        }
    });
};
compareNumtoTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error))
compareNumtoTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error))