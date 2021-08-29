//random user api

const randomUser = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => dipayUser(data))
}
randomUser()

const dipayUser = data =>{
    console.log(data);
const buddies = data.results
for(const buddy of buddies){
    console.log(buddy);
    const divContainer = document.getElementById('buddies')
   const div = document.createElement('div')
   div.innerHTML = `
   <h3>Name:${buddy.name.first}</h3>
   <img src="${buddy.picture.large}"/>
   <p class="email">Email:${buddy.email}</p>
   `
   divContainer.appendChild(div)


}
}