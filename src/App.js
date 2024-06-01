import React from 'react';
import { Container, TextField, Button, Box } from '@mui/material';

function InputAndButton() {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', marginTop: '50px' , backgroundColor: 'purple', padding: '20px' }}>
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row">
        <TextField label="Enter todo Inputs" variant="outlined" fullWidth 
          sx={{ marginRight: '10px',
                borderRadius:'100px',
                backgroundColor: 'white' }} />
        <Button variant="contained" color="primary"
         sx={{borderRadius:'500px'}}>
          +
        </Button>
      </Box>
    </Container>
  );
}

export default InputAndButton;
