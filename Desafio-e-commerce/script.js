const listaProdutos = document.getElementById('lista-produtos')

fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(produtos => { produtos.forEach (produto => {
    const card = document.createElement("div");
    card.classList.add("card");

card.innerHTML = `
    <img src="${produto.image}" alt="${produto.title}">
    <h3>${produto.title}</h3>
    <p>R$ ${produto.price.toFixed(2)}</p>
    <a href="produto.html?id=${produto.id}">Ver detalhes</a>`;

    listaProdutos.appendChild(card);
});})
.catch(err =>  console.error("Erro ao carregar produtos:", err));