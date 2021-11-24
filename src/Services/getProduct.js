import http from "./httpServices";

const getProduct = (id) => {
    return http.get(`/product/${id}`);
}

export default getProduct;