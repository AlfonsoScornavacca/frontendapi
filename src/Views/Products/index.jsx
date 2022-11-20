import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Button, Grid } from '@mui/material'
import useProducts from '../../Hooks/useProducts'
import BaseModal from '../../Components/modal'
import DeleteActionCell from '../../Components/actionCells/DeleteActionCell'
import EditActionCell from '../../Components/actionCells/EditActionCell'
import ProductForm from './ProductForm'
import { useState } from 'react'

const defaultProduct = {
    id: 0,
    name: '',
    price: 0
}

 const Products = () => {

    const  {productos, loading, createProduct, editProduct, deleteProduct}  = useProducts();
    const [currentProduct, setCurrentProduct] = useState({});
    const [open, setOpen] = useState(false);

    const handleChange = (target) => {
        setCurrentProduct({
            ...currentProduct, 
            [target.name] : target.value
        });
    };

    const handleCreate = () => {
        setCurrentProduct(defaultProduct);
        setOpen(true);
    };

    const handleEdit = (product) => {
        setCurrentProduct(product);
        setOpen(true);
    };

    const handleDelete = (product) => {
        if(window.confirm(`Desea eliminar el producto ${product.name}`)){
            deleteProduct(product.id)
        }
    }

    const handleSave = () =>{
        let result = currentProduct.id === 0
        ? createProduct(currentProduct)
        : editProduct(currentProduct);

        if(result !== null){
            setOpen(false)
        }
    }

    const columns = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'name', headerName: 'Nombre', width: 200},
        {field: 'price', headerName: 'Precio', width: 200},
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Acciones',
            flex: 1,
            maxWidth: 150,
            minWidth: 100,
            cellClassName: 'actions',
            getActions: (data) => {
                return [
                    <EditActionCell 
                    onClick={() => handleEdit(data.row)}
                    />,
                    <DeleteActionCell 
                    onClick={() => handleDelete(data.row)}
                    />
                ]
            }
        }
    ]


  return (

   <div style={{heigth: 400, width: '50%', margin: 'auto'}}>
      <Grid item xs={12} sx={{pb: 1, pt: 2}}>
        <Button
            sx={2}
            variant='contained'
            onClick={()=> handleCreate()}
        
        >
            Nuevo Producto
        </Button>
      </Grid>
      <Grid item sx={12}>
            <DataGrid
                rows={productos}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                autoHeight={true}
                loading = {loading}
            />
        </Grid>
        <BaseModal
            autoHeight = {true}
            open = {open}
            onClose = {() => {setOpen(false)}}
            title = "Productos"
            subTitle={''}
            content = {
                <ProductForm
                    handleChange={handleChange}
                    currentProduct = {currentProduct}
                />}
            submite = {() => handleSave()}
            disableSubmite = {false}

        />
   </div>
    
  )
}
export default Products
