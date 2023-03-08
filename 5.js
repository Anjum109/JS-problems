// array theke falsy value ber kora 

const mixedArr = [
    "lws",
    undefined,
    "Lubaba Anjum",
    false,
    "",
    "apple",
    40,
    "k",
    true,
    "Thats all",
    Nan,
];
// const trueArray = mixedArr.filter(function (el) {
//     if (el) {
//         return true;
//     } else {
//         return false;
//     }
// });

const trueArray = mixedArr.filter(Boolean);

console.log(trueArray);