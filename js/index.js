


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((json) =>{

    json.forEach(user => {
        document.getElementsByClassName("users")[0].innerHTML += `
             <li class="user">
             <div class="user_info">
             <h3>${user.name}</h3> 
             <h5>${user.email}</h5>
             </div> 
             <br />
             <a class="button" target="_blank" href="https://jsonplaceholder.typicode.com/users/${user.id}/posts">${"Get User’s Posts"}</a>
            </li>
            `
    })
} 
)