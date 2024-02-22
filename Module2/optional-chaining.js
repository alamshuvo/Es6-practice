// kibabe data access kora jai 
// first dekhte hobe data ta kiser moddhe ase kibabe access kora jai ota dekhte hobe age
// dape dape property gulo k access korte hobe jate kore kno bhul na hoi
const data =[{name:"abul",age:25,aderess:"nilkhet"}];
console.log(data[0].aderess);
const products={
    count:5000,
    data:[
        {id:1,brand:"lenovo",price:5000},
        {id:2,brand:"apple",price:11000}
    ]    
};
console.log(products.data[1].price);


const users={
    id:5000,
    name:"soriful raj",
    aderess:{
        city:"dhaka",
        street:{
            road:"4/a",
            sector:5,
            house:25,
            area:"Uttara"
        }
    }
}
console.log(users.aderess.street.area);
const user2={
    id:5002,
    aderess:{
    city:"dhaka",
    area:"Poribag",
    road:"88/j",
    sector:"10"
    }
}
console.log(user2.aderess.street?.area);
// error na khawer jonno optional chaining use kora hoi jate user error na khai 
