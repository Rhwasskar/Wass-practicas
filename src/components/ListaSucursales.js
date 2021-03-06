import React from "react";
import axios from "axios";
import * as M from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SimpleMenu from "./MenuSimple";
import { flexbox } from "@material-ui/system";

export default class ListaSucursales extends React.Component {
  state = {
    sucursales: [],
  };

  componentDidMount() {
    axios
      .get(`https://5d86882acd71160014aae73b.mockapi.io/api/sucursales`)
      .then((res) => {
        const sucursales = res.data;
        this.setState({ sucursales });
      });
  }

  render() {
    return (
      <div
        style={{
          flexGrow: 1,
        }}
      >
        <M.Container>
          <M.Grid container spacing={3}>
            {this.state.sucursales.map((sucu) => (
              <M.Grid item xs={3}>
                <M.Card variant="outlined" color="primary">
                  <M.CardHeader
                    title={sucu.Descripcion}
                    align="center"
                    avatar={
                        <M.Avatar aria-label="Betina" alt="Betina" src="betina.jpg">
                          
                        </M.Avatar>
                      }
                      action={
                        <M.IconButton aria-label="settings">
                          <M.Icon />
                        </M.IconButton>
                      }
                  ></M.CardHeader>
                  <M.CardContent>
                    <M.Grid container justifyContent="flex-end" spacing={2}>
                      <M.Grid item>
                        <SimpleMenu />
                      </M.Grid>
                      <M.Grid item alignSelf="flex-end"></M.Grid>
                    </M.Grid>
                  </M.CardContent>
                </M.Card>
              </M.Grid>
            ))}
          </M.Grid>
        </M.Container>
      </div>
    );
  }
}
