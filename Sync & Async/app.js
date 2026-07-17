// const container = document.getElementById("productbucket")

// fetch("https://dummyjson.com/recipes") 
//     .then( response => response.json() )
//     .then(data => {
//         console.log(data.products);
//     })

const container = document.getElementById("productbucket")

fetch("https://dummyjson.com/recipes")
    .then(response => response.json())
    .then(data => {
        container.innerHTML = data.recipes.map(recipes => `
              
    <div class = "card">
            <h3>${recipes.name}</h3>
            <img src = ${recipes.image}>
            <button class = "btn"> ${recipes.rating} </button>
        `).join("")
    })

const bg = document.getElementById(" ")