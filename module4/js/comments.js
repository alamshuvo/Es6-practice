const loadComment=()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(data=>displayComment(data))
    .catch(error=>console.error("error happend",error))
}
function displayComment(comments) {
    const anotherDiv=document.getElementById("display-container")
    for (const comment of comments) {
        const div=document.createElement("div");
        div.classList.add('post');
        div.innerHTML=`
        <h4>comment id-${comment.postId}</h4>
        <h5>comment name-${comment.name}</h5>
        <p>Comment email:${comment.email}<p>
        `
      anotherDiv.appendChild(div);
     
    }
}
const loadComment2=async ()=>{
   try {
    const res= await fetch('https://jsonplaceholder.typicode.com/comments');
    const data=await res.json();
    console.log(data);
   } catch (error) {
    console.error("data load error",error);
   }
}