import { allProductsUrl } from './utils.js';

const fetchProducts = async () => {
    try {
        const response = await fetch(allProductsUrl)
        // const data = response.json()
        // console.log(data);
        if(response){
            return response.json()
        }
        return response
    } catch (error) {
        console.log(error);
    }
};

export default fetchProducts;
