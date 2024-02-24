// 8 ways to get undefined 

// 1.variable that is not initialized will give undefined .
let a;
console.log(a);
// 2.Function with  no return will give undefined
function second(a,b) {
    const total =a+b;
}
const result=second();
console.log(result);

// 3 parameters that is not pass will be undefined.
function third(a,b,c,d) {
    const total =a+b+c+d;
    console.log(a,b,c,d);
}
third(2,5);

// 4.ki return  korbo seta jodi explicit ly bole dewa na takhe tahole undefined asbe .if return having on the right side will give undefined.
function noNegative(a,b) {
    if (a<0 ||b<0) {
        return;
    }
    else{
       return a+b;
    }
}
console.log(noNegative(2,-5));


// 5. property that dosent exixst of a object that have already undefined 
const fifth={name:"poncom",id:2,age:40};
console.log(fifth.age,fifth.salary);

// 6.array elements outside of the index range will give you undefined .
const sixth=[4,55,45,11,2];
console.log(sixth[1],sixth[5],sixth[200]);

// 7. evabe array tekeh kisu delet kora ucit na karon array er moddhe akta hole create hoi .splice dyea kora jai .
// deleting an element inside an array 
delete sixth[1];
console.log(sixth,sixth[1]);

// 8
const eight=null;
console.log(eight);


// 9 .kono data set kora hoi ni takhe null bola hoye takhe .
// typeof undefined holo undefined but typeof null holo object kew kew mone kore eta js er mistake .eta jodi js fix kore internet e onk onk jinis broken hoye jete pare .
// 10 kono ekta value nai ami jodi explicitly set korte cai tahole null set kora ucit .