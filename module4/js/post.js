function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>displayPost(data))
}
function displayPost(posts) {
    const postElement=document.getElementById("post-container");
    for (const post of posts) {
        
       const div=document.createElement("div");
       div.classList.add('post')
       div.innerHTML=`
       <h4>user-${post.userId}</h4>
       <h5>Post title-${post.title}</h5>
       <p>post driscription:${post.body}<p>
       `
       postElement.appendChild(div);
    }
  
}


loadPost()
function deletPost() {
    
}