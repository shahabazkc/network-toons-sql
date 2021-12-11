// // var a = 'khjkz';
// // var b = "faksj";

// // for (var i = 0; i < a.length; i++) {
// //     // console.log(a.charCodeAt(i))
// //     // console.log(b.charCodeAt(i));
// //     let firstElem = a.charCodeAt(i)
// //     let secondElem = b.charCodeAt(i)
// //     if (firstElem < secondElem) {
// //         console.log(secondElem - firstElem)
// //     }
// //     else {
// //         //console.log(firstElem, secondElem, "a".charCodeAt(0));
// //         console.log(("z".charCodeAt(0) - firstElem) + (secondElem - "a".charCodeAt(0)) + 1)
// //     }
// // }

// let words1 = ["leetcode", "is", "amazing", "as", "is"], words2 = ["amazing", "leetcode", "is"]
// let aChecked = {};
// let bChecked = {};
// let matchedA = {};
// let matchedB = {};
// let count = 0;
// //console.log(words1.sort(),"\n",words2.sort())
// words1.forEach((e, index) => {
//     if (aChecked[e] != true) {
//         words2.forEach((elem, i) => {
//             if (e === elem && (bChecked[elem] == i || bChecked[elem] == undefined)) {
//                 console.log("matched: ", e, elem);
//                // console.log(e === elem);
//                 count++;
//                 bChecked[elem] = i;
//                 // matchedA[e] = true;
//                 // matchedB[elem] = i;
//             } else {
               
//             }

//         });

//     } else {

//         if (matchedA[e] == true) count--;

//     }
//     aChecked[e] = true;
// });

// console.log(count);
let x = 10;
x = ++x;
console.log(x);