// spreed
// const numbers=[1,2,3,4];
// const num1=numbers;
// num1.push(10);
// numbers.push(20);
// console.log("num1 =",num1);
// console.log("numbers = ",numbers);
// non premitiive data type tader referance ta k ake oporer sathe share kore tahke and value return korena reference k dore rake .ai osubida dur korar jonno amra spreeding ta use kore takhi .
// const numbers=[1,2,3,4];
// let num1=[];
// for (const num of numbers) {
// num1.push(num);    
// }
// num1.push(10);
// numbers.push(20)
// console.log(num1);
// console.log(numbers);
// ekahne alada alada value dewar karon holo akhane alada akta empty array crate hoi jar address o alada ,

// const numbers=[1,2,3,4,5];
// const num=[...numbers];
// num.push(10);
// numbers.push(20)
// console.log(numbers);
// console.log(num);






// destracturing 
const nums=[1,2,3,4,5,6,4,7,8,9];
// const a=nums[0];
// const b=nums[1];
// const c=nums[2];
// const d=nums[3];
// console.log(a,b,c,d);
// amr kase nirdisto akta structure ache sekhan tekhe nirdisto kisu value k nirdisto kisu variable e store kora ja 

const [a,b,c,...d]=nums;
// console.log(a,b,c,d);

// caile spreeding k kaje lagiea r o powerfull kora jai .
// spreding kore poroborti value gulo k alada akta variable a store kora jai and seti akta array akare dyea takhe .
// destractiung ta tokhn e use korbo jokhon amdaer value gula serially dorkar hoyea takeh  
// jegula nyea nise segolo bade alada akta variaable e newa jai ,remaining ongso ta k rest operator bola hoyea takhe .



// object spereding o same vabe kora jai jevbe array spredding korea hoyea takhe .
const person ={
    name:"iftakhar alam",
    age:22,
    adress:{
        upojila:"Mirsarai",
        zila:"chattagram",
        thana:"jorargong",
    },
    p:[0,2,3],

};
const person1={...person};
person1.email="iftakharalamsuvo11@gmail.com";
// console.log(person1);
// console.log(person);


// object destructing
const {name,adress}=person;
console.log(name,adress);
// khub sohoje object destructing kora jai ,ekhane kono siquance er  dorkar hoi na array er moto .j property ta dorkar setir nam likhle takhe pawa  jabe .
// deeply destructing mane nested object k access korar jonno jevabe use kora hoyea takhe take bola hoi deeply destructing .