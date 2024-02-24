const sum=()=>{
let counter=0;
return ()=>{
    counter++;
    return counter;
}
}
const result =sum();
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());

// javascript closure holo  jokhon kono akta function create kora hoi and oi fuction tekhe onno kono function return kora hoi tokhn parent function r child function er sathe close akta somporko create hoi jake javascript er basai closure bola hoyea takhe .javascript closure hobe jokhn parent functon er kono akta variable child function e use kora hoyea takhe ,tokhon sadaronoto javascript closure create  hoyea takhe .  r ei topic ta sadaronoto interview question er jonno khub e upojogi tai javasctipt closure r o balo kore explore korte hobe .