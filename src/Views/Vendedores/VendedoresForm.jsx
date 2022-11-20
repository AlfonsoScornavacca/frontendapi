import { Box, TextField } from "@mui/material";
import {styles} from './styles'


const VendedoresForm = ({currentVendedor, handleChange}) => {
  return (
    <Box sx={styles.inputFields} alignItems={"stretch"} >
      <TextField
          placeholder="Nombre"
          name="name"
          label='Nombre'
          required
          value={currentVendedor.name}
          onChange ={(e) => handleChange(e.target)}>
      </TextField>
      <br/>
      <TextField
          placeholder="Apellido"
          name="lastName"
          label='Apellido'
          required
          value={currentVendedor.lastName}
          onChange ={(e) => handleChange(e.target)}>
      </TextField>
    </Box>
  )
}

export default VendedoresForm