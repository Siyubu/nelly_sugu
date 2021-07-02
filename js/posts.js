const urlParams = new URLSearchParams(window.location.search);
const user_name = urlParams.get('name');
const user_id = urlParams.get('user_id')
document.getElementById("post_header").innerHTML += `
<h3> ${user_name}'s Posts </h3>
`

fetch(`https://jsonplaceholder.typicode.com/users/${user_id}/posts`)
.then((response) => response.json())
.then((json) =>{
    json.forEach(post => {
        document.getElementsByClassName("posts")[0].innerHTML += `
             <li class="post">
             <p><b>UserId: </b>${post.userId}</p> 
             <p><b>Id: </b>${post.id}</p>
             <p><b>Title: </b>${post.title}</p>
             <p><b>Body: </b>${post.body}</p>
            </li>
            `
    })
} 
)