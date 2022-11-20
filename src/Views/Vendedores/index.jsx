import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Button, Grid } from '@mui/material'
import useVendedores from '../../Hooks/useVendedores'
import BaseModal from '../../Components/modal'
import DeleteActionCell from '../../Components/actionCells/DeleteActionCell'
import EditActionCell from '../../Components/actionCells/EditActionCell'
import VendedoresForm from './VendedoresForm'
import { useState } from 'react'

const defaultVendedor = {
    id: 0,
    name: '',
    lastName:'',
    isActive: true
}

 const Vendedores = () => {

    const  {vendedores, loading, createVendedores, editVendedores, deleteVendedores}  = useVendedores();
    const [currentVendedor, setCurrentVendedor] = useState({});
    const [open, setOpen] = useState(false);

    const handleChange = (target) => {
        setCurrentVendedor({
            ...currentVendedor, 
            [target.name] : target.value
        });
    };

    const handleCreate = () => {
        setCurrentVendedor(defaultVendedor);
        setOpen(true);
    };

    const handleEdit = (vendedor) => {
        setCurrentVendedor(vendedor);
        setOpen(true);
    };

    const handleDelete = (vendedor) => {
        if(window.confirm(`Desea eliminar el vendedor ${vendedor.name}`)){
            deleteVendedores(vendedor.id)
        }
    }

    const handleSave = () =>{
        let result = currentVendedor.id === 0
        ? createVendedores(currentVendedor)
        : editVendedores(currentVendedor);

        if(result !== null){
            setOpen(false)
        }
    }

    const columns = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'name', headerName: 'Nombre', width: 200},
        {field: 'lastName', headerName: 'Apellido', width: 200},
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
            Nuevo Vendedor
        </Button>
      </Grid>
      <Grid item sx={12}>
            <DataGrid
                rows={vendedores}
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
            title = "Vendedores"
            subTitle={''}
            content = {
                <VendedoresForm
                    handleChange={handleChange}
                    currentVendedor = {currentVendedor}
                />}
            submite = {() => handleSave()}
            disableSubmite = {false}

        />
   </div>
    
  )
}
export default Vendedores
