import { useEffect, useState } from "react";
import productServices from "../Services/productServices";

const useProducts = () => {

   const [productos, setProductos] = useState([]);
   const [loading, setLoading] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = () => {
        productServices.get()
        .then(rows => setProductos(rows))
        .finally(setLoading(false))
        .catch(e => console.log(e))
    }

    const createProduct = (product) => {
        setLoading(true)
        productServices.post(product)
        .then (resp =>{
            fetchProducts();
            return resp;
        } )
        .finally(setLoading(false))
        .catch(e => console.log(e))
    }

    const editProduct = (product) => {
        setLoading(true)
        productServices.put(product)
        .then (resp =>{
            fetchProducts();
            return resp;
        } )
        .finally(setLoading(false))
        .catch(e => console.log(e))
    }

    const deleteProduct = (id) => {
        setLoading(true)
        productServices.delete(id)
        .then (resp =>{
            fetchProducts();
        } )
        .finally(setLoading(false))
        .catch(e => console.log(e))
    }

    return {
        productos,
        loading,
        createProduct,
        editProduct,
        deleteProduct
    }
}
 export default useProducts;