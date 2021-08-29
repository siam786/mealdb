fetch('https://jsonplaceholder.typicode.com/photos')
.then(Response => Response.json())
.then(json => albumsData(json))


function albumsData(data){
    const albumContainer = document.getElementById('albums')
    for(const album of data){
       const p = document.createElement('p')
       p.innerHTML = `<img src="${album.url}"> and data id:${album.id}`
       albumContainer.appendChild(p)
    }
    console.log(data);
}