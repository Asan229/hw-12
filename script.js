window.addEventListener("load", getProducts);

function getProducts() {
    fetch("products.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.forEach((product) => {
                const inner = document.querySelector(".container__inner");
                const products = document.createElement("div");
                const title = document.createElement("div");
                const img = document.createElement("img");
                const h3 = document.createElement("h3");
                const price = document.createElement("p");
                const text = document.createElement("p");

                inner.appendChild(products);
                title.append(h3, price);
                products.append(img, title, text);

                img.className = "products__img";
                products.className = "products";
                title.className = "products__title";
                h3.className = "title";
                price.className = "price";
                text.className = "products__text";

                img.src = `${product.img}`;
                h3.innerText = `${product.title}`;
                price.innerText = `${product.price}coм`;
                text.innerText = `${product.desc}`;
            });
        });
}