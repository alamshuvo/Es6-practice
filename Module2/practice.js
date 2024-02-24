// secondary sechool er location ta kothai seta ber  koro 
const data ={
    sophia:{
        id:33,
        study:[
            {
                primary:[
                {schoolName:"bamon sundor ideal school"},
                {location:"bamon sundor"}
            ]
            },
            {
                secondary:[
                    {schoolName:"bamon sundor fakhir ahmmed high school"},
                    {location:"mirsarai"}
                ]
            },

        ]
    }
}
console.log(data.sophia.study[1].secondary[1].location);


// task 2
const student={
    2222: {
        name:"jack",
        section:"c",
        class:"IX",
        adress:{
            "buildingNo":12,
            "street no":" st .jonson",
            "city":"petersburg",
            "country":"UK"
        }
    },
    3333:{
        name:"Harry",
        section:"c",
        class:"IX",
        adress:{
            "buildingNo":12,
            "street no":" st .london",
            "city":"Amasturdam",
            "country":"UK"
        }
          
}
}
  

console.log(student["2222"].adress["city"]);
console.log(student["3333"].name);


// task 3 
const data2={
    data:[
        {
            bookId:1,
            bookDetails:{
                name:"habluder adda",
                catagory:"xyz",
                price:"$20",
            },
            bookCatagory:"basic"
        },
        {
            bookId:2,
            bookDetails:{
                name:"Programming er 14 gusti",
                catagory:"xyz",
                price:"$40",
            },
            bookCatagory:"programming"
        }
    ]
}
console.log(data2.data[0].bookDetails.name);
console.log(data2.data[1].bookCatagory);


// task 4 :;
//  You have an odd array ,array with odd numbers [1,3,5,7,9]
// now convert this array into an even array[2,4,6,8,10,12] do this using for loop and array map method hints:add one to any odd numbers and it will become an even number
const n=[1,3,5,7,9];
const converEven=n.map(a=>a+1);
console.log(converEven);



const numbers=[1,3,5,7,9];
function number(numbers){
    let f=[];
  for (let number of numbers) {
    number+=1;
    f.push(number);
  }
return f;
}
console.log(number(numbers));


// task 5 : You are given an array say [33,50,79,78,90,101,30] ,now return get all the elements which are divisiable by 10 using arra.filter  method now do the same task of quenstion 2 but do this using array find method then compare the output of question 2 and 3

// using filter method 
const numbers1 =[33,50,79,78,90,101,30];
const divisiableBy=numbers1.filter(n=>{
    if (n%10==0) {
        return n;
    }
})
console.log(divisiableBy);

// using find method
const another=numbers1.find(a=>{
    if (a%10==0) {
        return a;
    }
})
console.log(another);

// defferance between array filter method and array find method .array filter method return a new array .that condition  matchd on the other hand find method  return a single number that have first condition matched .Both method are not change old array .



// task 6 : you have an array of object c
// const instructor=[{name:"nodi",age:28,position:"senior"}]
const instructor=[
    {name:"nodi",age:28,position:"senior"},
    {name:"akil",age:26,position:"jounior"},
    {name:"sobuj",age:30,position:"senior"}
];

const seniorIns=instructor.filter(n=>n.position==="senior");
const seniorInsName=seniorIns.map(n=>n.name)
console.log(seniorInsName);

// kono array of object tekhe kono kisu khuje ber korte hole sadaronooto array return kore and array k abr map kore array er each element k dekha jai 


// task 6 : 
const people =[
    {name:"mina",age:20},
    {name:"rina",age:15},
    {name:"sucorita",age:22},
];

// using for of loop 
function calAge(){
    let ageSum=0;
    for (const element of people) {
        ageSum=ageSum+element.age;
    }
    return ageSum;
}
console.log(calAge());


// using reduce method 
 const a= people.reduce((acc,curent)=>acc+curent.age,0);

console.log(a);
