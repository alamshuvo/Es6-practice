//? 1.truthy:
//   2 .jekono akta number value truthy other than 0
// 3.jekono akta string holo truthy other than emty string 
// 4.0 false but string er 0 kintu false na 
// 5.empty object truthy value.
// 6.empty array truthy value .


//! 2.falsey:
// 1.false  likhle falsy,
// 2.0 is a falsy value
// 3.empty is a falsy value
// 4. undefined holo falsey value
// 5. null holo falsey value .




const x="";
if (x) {
    console.log("value of x is truthy");
} else {
    console.log("value of x is a falsy");
};

let a=[];
console.log(a);
if (a) {
console.log("value of a is truthy");    
} else {
    console.log("value of y is falsy ");
}



const j="0";
if (!j) {
    console.log("j is a falsy value");
}
else{
    console.log("j is a truthy value");
}