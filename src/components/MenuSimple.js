import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl1(null);
  };

  return (
    <div>
      <Button variant="contained" color="secondary" aria-controls="menu-visitar" aria-haspopup="true" onClick={handleClick1}>
        Ir 
      </Button>
      <Menu                           //visitar
        id="menu-visitar" 
        anchorEl={anchorEl1}
        keepMounted
        open={Boolean(anchorEl1)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Visita virtual</MenuItem>
        <MenuItem onClick={handleClose}>Fisico</MenuItem>
      </Menu>
{/* <-- ////////////////////////////////////////////////// */}
     
      <Button variant="contained" color="primary" aria-controls="menu-ver" aria-haspopup="true" onClick={handleClick}>
        Ver
      </Button>
      <Menu                           //ver
        id="menu-ver"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Serv.Internet</MenuItem>
        <MenuItem onClick={handleClose}>Camara</MenuItem>
        <MenuItem onClick={handleClose}>Impresora</MenuItem>
        <MenuItem onClick={handleClose}>Coordinador</MenuItem>
      </Menu>

    </div>
  );
}