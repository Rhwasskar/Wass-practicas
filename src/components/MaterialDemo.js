import { useState } from "react";
import { Transition } from "react-transition-group";
import * as Mui from "@material-ui/core";
import * as MuiColors from "@material-ui/core/colors"

const theme = Mui.createTheme({
    palette: {
        primary: {
            main: MuiColors.green[800]
        }
    }
    /*overrides:{
        
    }*/
})

const duracion = 2000;

const MaterialDemo = (props) => {
    const [opt, setOpt] = useState(0);
    const [toggle, setToggle] = useState(true);

    return (<Mui.ThemeProvider theme={theme}>
        <Mui.AppBar position="static">
            <Mui.Toolbar>
                <Mui.Typography variant="h5">Wass Material Design</Mui.Typography>
            </Mui.Toolbar>
        </Mui.AppBar>
        <Mui.Paper>
            <Mui.Tabs indicatorColor="primary" value={opt} centered>
                <Mui.Tab label="Sucursales" onClick={() => { setOpt(0) }} />
                <Mui.Tab label="PC" onClick={() => { setOpt(1) }} />
                <Mui.Tab label="Servicios" onClick={() => { setOpt(2) }} />
                <Mui.Tab label="Reportes" onClick={() => { setOpt(3) }} />
            </Mui.Tabs>
        </Mui.Paper>
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
        <Mui.Button variant="contained" color="primary"
            onClick={() => { setToggle(!toggle) }}>
            Contained
        </Mui.Button>
        <Mui.Button variant="outlined" color="primary"
            onClick={() => { setToggle(!toggle) }}>
            Outlined
        </Mui.Button>
        <Mui.Button variant="text" color="primary"
            onClick={() => { setToggle(!toggle) }}>
            Text
        </Mui.Button>
    </Mui.ThemeProvider>);
}

export default MaterialDemo;