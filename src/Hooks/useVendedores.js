import { useEffect, useState } from "react";
import vendedoresServices from "../Services/vendedoresServices";

const useVendedores = () => {

   const [vendedores, setVendedores] = useState([]);
   const [loading, setLoading] = useState([]);

    useEffect(() => {
        fetchVendedores();
    }, [])

    const fetchVendedores = () => {
        vendedoresServices.get()
        .then(rows => setVendedores(rows))
        .finally(setLoading(false))
        .catch(e => console.log(e))
    }

    const createVendedores = (vendedor) => {
        setLoading(true)
        vendedoresServices.post(vendedor)
        .then (resp =>{
            fetchVendedores();
            return resp;
        } )
        .finally(setLoading(false))
        .catch(e => console.log(e))
    }

    const editVendedores = (vendedor) => {
        setLoading(true)
        vendedoresServices.put(vendedor)
        .then (resp =>{
            fetchVendedores();
            return resp;
        } )
        .finally(setLoading(false))
        .catch(e => console.log(e))
    }

    const deleteVendedores = (id) => {
        setLoading(true)
        vendedoresServices.delete(id)
        .then (resp =>{
            fetchVendedores();
        } )
        .finally(setLoading(false))
        .catch(e => console.log(e))
    }

    return {
        vendedores,
        loading,
        createVendedores,
        editVendedores,
        deleteVendedores
    }
}
 export default useVendedores;