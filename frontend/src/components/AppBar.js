import React from "react";
import { Grid } from "semantic-ui-react";
import "./AppBar.css";

const AppBar = () => {
  return (
    <Grid.Row className="app-bar-row">
      <Grid.Column column={1}>
        <p className="app-bar-name">JEPARDY</p>
      </Grid.Column>
    </Grid.Row>
  );
};
export default AppBar;
