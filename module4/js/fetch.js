function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res=>res.json())
    .then(data=>console.log(data))
} 

function another() {
const url='https://jsonplaceholder.typicode.com/users';
fetch(url)
.then(res=>res.json())
.then(data=>load(data))
}
function load(data){
    console.log(data);
}