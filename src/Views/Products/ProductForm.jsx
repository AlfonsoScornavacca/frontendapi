import { Box, TextField } from "@mui/material";
import {styles} from './styles'


const ProductForm = ({currentProduct, handleChange}) => {
  return (
    <Box sx={styles.inputFields} alignItems={"stretch"} >
      <TextField
          placeholder="Nombre"
          name="name"
          label='Nombre'
          required
          value={currentProduct.name}
          onChange ={(e) => handleChange(e.target)}>
      </TextField>
      <br/>
      <TextField
          placeholder="Precio"
          name="price"
          label='Precio'
          required
          value={currentProduct.price}
          onChange ={(e) => handleChange(e.target)}>
      </TextField>
    </Box>
  )
}

export default ProductForm