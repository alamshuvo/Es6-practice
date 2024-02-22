// map loops throug each elemnt of  the array ,and do the operation that you passed in the call back function and hold the result for each operation in an array and finally returns in the array.
const numbers=[2,5,1,4,5,6];
// const doubled=[];
// for (const num of numbers) {
//     const double=num*2;
//     doubled.push(double);
// }
// console.log(doubled);
// function doubleIt(num) {
//     return num*2;
// }

// const result=numbers.map(doubleIt);
// console.log(result);

// step 2:arrow function 
// const doubleIt=n=>n*2;
// const output=numbers.map(doubleIt)
// console.log(output);


// step 3 ;
// const output=numbers.map(n=>n*2);
// console.log(output);


// aro map kore den 
// const another=[12,10,15,7,5,8,12];
// const doubled=another.map(num=>Math.pow(num,2));
// console.log(doubled);


const friends=["tom","jon","mikel","olivaer"];
const length=friends.map(frn=>frn[0]);
console.log(length);
// kono akta array er prottek ta upadaern jonno kono result asle seguloke akta array er moddhe rekhe kaj kora jai map er maddohome 