const container = document.getElementById("productcontainer");

async function products() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await resaponse.json();

    data.products.map(products => {
        container.innerHTML += `
        <div class = "card">
            <h3>${products.title}</h3>
            <img src = ${products.thumbnail}>
            <button class = "btn"> ${products.price} </button>
        `
    })

}