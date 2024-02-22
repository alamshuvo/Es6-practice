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