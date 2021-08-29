fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json.id))

  function loadData(){
   fetch('https://jsonplaceholder.typicode.com/todos/1')
   .then(response => response.json())
   .then(data => console.log(data.title))
  
  }

  function loadUser(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => user(json))
  }

  function user(json){
     const users = document.getElementById('users')
     for( const ami of json){
         const li = document.createElement('li')
         li.innerText = `Email: ${ami.name} and Phone ${ami.phone} also have Email ${ami.email}`
         users.appendChild(li);
     }

  }