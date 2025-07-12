import { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

export default function Test() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (!document.querySelector('.page-wrapper')) {
        console.error("Error: 'page-wrapper' element not found!");
      }
    }, 1000); // Attendre 1 seconde pour s'assurer que le DOM est chargé
  }, []);

  return (
    <div className="page-wrapper">
      <Button onClick={() => setOpen(true)}>Show backdrop</Button>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        onClick={() => setOpen(false)}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
