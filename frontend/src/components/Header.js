import React from "react";
import { Grid } from "semantic-ui-react";
import "./Header.css";
import usePoints from "./usePoints";
import Points from "./Points";
// import AppBar from "./AppBar";

const Header = ({ players }) => {
  const { points, addPoint, subtractPoint } = usePoints(players);
  return (
    <>
      <Grid padded className="header-p">
        <Grid.Row className="patient-header">
          {players.length > 0 &&
            players.map((player) => (
              <Player
                player={player}
                points={points}
                addPoint={addPoint}
                subtractPoint={subtractPoint}
              />
            ))}
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Header;

const Player = ({ player, points, addPoint, subtractPoint }) => {
  return (
    <Grid.Column className="patient-header-profile" computer={2}>
      <Points
        name={player}
        points={points[player]}
        addPoint={addPoint}
        subtractPoint={subtractPoint}
      />
    </Grid.Column>
  );
};
