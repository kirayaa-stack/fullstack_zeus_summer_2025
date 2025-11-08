interface Product {
    id: number;
    title: string;
    price: number;
}

interface APIResponse {
    products: Product[]
}


// 2.FETCH API datagaa JS deer duudaj avcirah
async function fetchProducts(): Promise<Product[]> {
    const API_URL = 'https://dummyjson.com/products';

    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const data = await response.json() as APIResponse;
        return data.products;

    } catch (error) {
        console.error('Could not fetch the API url', error);
        return []
    }

}
// 3. Display products
function displayProducts(products: Product[]): void {
    const productList = document.getElementById('product-list');
    if (!productList) return;
    productList.innerHTML = '';
    products.map(product => {
        const li = document.createElement('li');
        li.textContent = `${product.title} - `;
        const priceStrong = document.createElement('strong');
        priceStrong.textContent = `$${product.price}`;
        li.appendChild(priceStrong);
        productList.appendChild(li);
    });
}
// 4. Call functions
async function main() {
    const products = await fetchProducts()
    displayProducts(products);
}

// 5. When Dom loaded call the main function
document.addEventListener('DOMContentLoaded', main);

