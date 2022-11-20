import React from 'react'
import Deleteicon from '@mui/icons-material/Delete'
import { GridActionsCellItem } from '@mui/x-data-grid'

const DeleteActionCell = ({onClick}) => 
<GridActionsCellItem 
    icon = {<Deleteicon />}
    label = 'Delete'
    onClick={onClick}
    color = 'inherit'
/>
export default DeleteActionCell