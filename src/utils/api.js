export async function getAllProducts() {
    try {
        const response = await fetch("/api/allProducts");
        const data = await response.json();
        return data.products;
    } catch(err) {
        throw new Error(err);
    }
}

export async function getNewArrivalsProducts() {
    try {
        const response = await fetch("/api/newArrivalsProducts");
        const data = await response.json();
        return data.products;
    } catch(err) {
        throw new Error(err);
    }
}

