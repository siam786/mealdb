//add api 
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(json => displayPost(json))

function displayPost(data){
   // console.log(data);
const posts = document.getElementById('posts')
for(const post of data){
    const div = document.createElement('div')
    div.classList.add('post')
    div.innerHTML =  `
    <h3>${post.title}</h3>
    <p>${post.body}</p>

    `;
    posts.appendChild(div)
    
}
}