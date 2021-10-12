import { useState } from "react";
import { Transition } from "react-transition-group";
import * as Mui from "@material-ui/core";
import * as MuiColors from "@material-ui/core/colors";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import BotonesSort from "./BotonesSort";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ListaSucursales from "./ListaSucursales";

const theme = Mui.createTheme({
  palette: {
    primary: {
      main: MuiColors.blueGrey[800],
    },
  },
  /*overrides:{
        
    }*/
});

const duracion = 2000;

const AppMaterial = (props) => {
  const [opt, setOpt] = useState(0);
  // const [toggle, setToggle] = useState(true);

  return (
    <Mui.ThemeProvider theme={theme}>
      <Mui.AppBar position="static">
        <Mui.Toolbar>
          <Mui.Typography variant="h5">
            {" "}
            CMDB - Wass Material Design
          </Mui.Typography>
        </Mui.Toolbar>
      </Mui.AppBar>

      <Mui.Paper>
        <Mui.Tabs indicatorColor="primary" value={opt} centered>
          <Mui.Tab
            label="Sucursales"
            onClick={() => {
              setOpt(0);
            }}
          />
          <Mui.Tab
            label="PC"
            onClick={() => {
              setOpt(1);
            }}
          />
          <Mui.Tab
            label="Servicios"
            onClick={() => {
              setOpt(2);
            }}
          />
          <Mui.Tab
            label="Reportes"
            onClick={() => {
              setOpt(3);
            }}
          />
        </Mui.Tabs>
      </Mui.Paper>

      <Router>
        <Mui.Box>
          <Switch>
            <Route path="/">
              <BotonesSort />
              <ListaSucursales />
            </Route>
            <Route path="/sucursales">
              <BotonesSort />
              <ListaSucursales />
            </Route>
            <Route path="/pc">
              <BotonesSort />
              {/* <ListaPCs /> */}
              <h1>Pcs</h1>
            </Route>
            <Route path="/servicios">
              <BotonesSort />
              {/* <ListaServicios /> */}
              <h1>Servicios</h1>
            </Route>
            <Route path="/dispositivos">
              <BotonesSort />
              {/* <ListaDispositivos /> */}
              <h1>Dispositivos de HW</h1>
            </Route>
            <Route path="/reportes">
              <BotonesSort />
              {/* <ListaReportes /> */}
              <h1>Reportes</h1>
            </Route>
          </Switch>
        </Mui.Box>
      </Router>

      {/* <Transition in={toggle} timeout={duracion}>
            {
                (estado) => {
                    switch (estado) {
                        case 'entered':
                            return <Mui.Typography variant="h1">Entre en la transicion</Mui.Typography>
                            break;
                        case 'entering':
                        case 'exiting':
                            return <Mui.Typography variant="h6">Realizando Transicion</Mui.Typography>
                            break
                        case 'exited':
                            return <Mui.Typography variant="h3">Sali de la transicion</Mui.Typography>
                            break;
                        default:
                            break;
                    }
                }
            }
        </Transition> */}
    </Mui.ThemeProvider>
  );
};

export default AppMaterial;
