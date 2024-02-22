// problem 1 : write an arrow function that will take 3 param will multiply the param and will return the reslt 
const mult= (a,b,c)=>a*b*c;
const result =mult(2,2,8);
// console.log(result);

// problem 2 : Write the following sentence in three lines and print the result .i  am web developer . I love to code .I love to eat biriany.
const sentence =`I am web developer.
I love to code .
I love to eat biriyani`;
// console.log(sentence);


// problem 3 :write an arrow function that have a tow parm but one param has a default value and finally  add the valu and return the value;
const add =(a,b=5)=>a+b;
const resultAdd =add(1);
// console.log(resultAdd);


// problem4:
const friends=(a)=>{
    let friendName=[];
    for (const name of a) {
        if (name.length %2===0) {
            friendName.push(name);
        }
    }
    return friendName;
}
console.log(friends(["alam","shuvo","rahib ul Haque","azgor ali","Nazmul","Fahim sahariar joy"]));

// problem5
// write an arrow function where it will do the following x*2 
// square each array element 
// calculate the sum of the squared element 
// return the average of the sum of the squared element .

const numbers=(a)=>{
    let squaredElement=0;
    for (const num of a) {
        let square=Math.pow(num, 2);
        squaredElement+=square;
    }
    const avg=squaredElement/a.length;
    return avg;
}
console.log(numbers([10,2,2,3,2]));

// problem 6 :Write an arrow function 
// that have two param as an array .
// you merge the two array and  find the max number and return it.
const anotherNumbers=(a,b)=>{
   const finalArray=[...a,...b];
   const maxNumbers=Math.max(...finalArray);
   return maxNumbers;
}
// console.log(anotherNumbers([5,10,15,20,1000,1],[30,40,50,100,600]));
