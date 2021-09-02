import axios from "axios";


export const postProducts = (product) => {
    console.log("Post" + product);
    return axios.post('https://api.amazing.com/add_product',{product});
}