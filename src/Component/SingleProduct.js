
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState , useEffect } from 'react';
import axios from 'axios';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function SingleProduct({id}) {
// console.log(id)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
      const [single,setSingle]=useState({});
    
    useEffect(()=>{
      axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setSingle(res.data))
    },[])
  console.log(single);

  return (
    <div>
      <Button onClick={handleOpen} variant="outlined">View</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
          {single.category}
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                 <div className='d-flex justify-content-center'>
                 <img src={single.image} style={{height:'100px',margin:'0 auto'}}/>
          
                 </div>
                 <h4>{single.title}</h4>
                   <p>
                   {single.description}
                   </p>
                 <p>Price: {single.price} $</p>
                 <Button variant="outlined" onClick={()=>{setOpen(false)}}>Close</Button>

          </Typography>
        </Box>
      </Modal>
    </div>
  );
}