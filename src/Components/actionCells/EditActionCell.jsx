import React from 'react'
import Editicon from '@mui/icons-material/Edit'
import { GridActionsCellItem } from '@mui/x-data-grid'

const EditActionCell = ({onClick}) => 
<GridActionsCellItem 
    icon = {<Editicon />}
    label = 'Edit'
    onClick={onClick}
    color = 'inherit'
/>
export default EditActionCell