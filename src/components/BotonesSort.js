import { useState } from "react";
import { Transition } from "react-transition-group";
import * as Mui from "@material-ui/core";
import * as MuiColors from "@material-ui/core/colors";
import { TextField } from "@material-ui/core";

const BotonesSort = (props) => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <Mui.Button
        variant="contained"
        color="primary"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Alfabetico
      </Mui.Button>

      <Mui.Button
        variant="outlined"
        color="primary"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Por Zona
      </Mui.Button>

      <Mui.Button
        variant="outlined"
        color="primary"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Por tipo
      </Mui.Button>

      <TextField label="Filtrar" variant="filled" size="small" color="secondary" />
    </div>
  );
};

export default BotonesSort;
