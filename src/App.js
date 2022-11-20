import './App.css';
import {Grid, Container} from '@mui/material'
import { Outlet } from 'react-router-dom';
import NavBar from './Components/NavBar';

function App() {
  return (
    <Grid container >
      <NavBar />
      <Container maxWidth= 'xl'>
        <Outlet />
      </Container>
    </Grid>
  );
}

export default App;
