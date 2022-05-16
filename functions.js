let users;
let posts;
let zero= 123;

async function fetchUsers(){
    users = await fetch("https://jsonplaceholder.typicode.com/users");
    users = await users.json();
    return users;
}
function helloWorld(){
    console.log("Buna ziua");
}
async function fetchPosts(){
    posts = await fetch("https://jsonplaceholder.typicode.com/posts");
    posts = await posts.json();
    console.log("Am apelat o functie din JS file")
    return posts;
}
async function showUsers(users){
    for(var i = 0; i < 10;i++){
        console.log(users[i].id);
    }
}
users =  fetchUsers().then(response =>{
    console.log("Am primit ", response);
    showUsers(response);
    populateUsers();
    
})
function populateUsers(){
    text = "";
    for(var i = 0; i<users.length;i++){
        const para = document.createElement("p");
        const node = document.createTextNode(JSON.stringify(users[i].name));
        para.appendChild(node);
        const element = document.getElementById("demo");
        element.appendChild(para);
    }
}
function alerta(){
    alert("Sunt frumusel!");
}
function addButton(){
    let btn = document.createElement("button");
    btn.innerHTML = "Add article";
    document.body.appendChild(btn);
    btn.className = "butonADD";
}
posts = fetchPosts();
console.log(users);