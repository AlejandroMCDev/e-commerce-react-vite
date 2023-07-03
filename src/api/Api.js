import axios from "axios";

export const fetchProducts = async() => {
    const products = await axios.get("https://fakestoreapi.com/products");
    return products;
}