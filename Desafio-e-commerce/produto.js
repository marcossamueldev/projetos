const detalhesContainer = document.getElementById("detalhes-produto");

const params = new URLSearchParams(window.location.search);
const idProduto = params.get("id");

if (idProduto) {
    fetch(`https://fakestoreapi.com/products/${idProduto}`)
    .then(res => res.json())
    .then(produto => {
        detalhesContainer.innerHTML = `
        <img src="${produto.image}" alt="${produto.title}" width="200">
        <h2>${produto.title}</h2>
        <p><strong>Preço:</strong> R${produto.price.toFixed(2)}</p>
        <p><strong>Categoria:</strong> ${produto.category}</p>
        <p>${produto.description}</p>
        <p><strong>Avaliação:</strong> ${produto.rating.rate} &#9733; (${produto.rating.count} avaliaçoes)</p>`;
    })
    .catch(err => console.error("Erro ao carregar detalhes:", err));
} else {
    detalhesContainer.innerHTML = "<p>Produto nao encontrado.</p>";
}