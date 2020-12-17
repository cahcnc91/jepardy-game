import React, { Fragment, useState } from "react";
import { Grid, Form, Button, GridRow, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const Home = ({ addPlayer, players }) => {
  const history = useHistory();
  const [playerName, setPlayerName] = useState("");

  const handleKeyEnter = (e) => {
    if (e.key === "Enter") {
      addPlayer(playerName);
      setPlayerName("");
    }
  };

  return (
    <Fragment>
      <Grid style={{ display: "flex", width: "100%", padding: "5rem" }}>
        <Grid.Row style={{ display: "flex", alignItems: "center" }}>
          <h2 style={{ margin: 0 }}>Add players</h2>
          <Icon name="add user" size="large" style={{ marginLeft: "1rem" }} />
        </Grid.Row>
        <GridRow>
          <Form>
            <Form.Input
              onKeyDown={(e) => handleKeyEnter(e)}
              label="Name"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />
          </Form>
        </GridRow>
        <Grid.Row>
          <h1>Current players</h1>
        </Grid.Row>
        {players.length > 0 &&
          players.map((player) => (
            <Grid.Row style={{ display: "flex", alignItems: "center" }}>
              <Icon
                name="user"
                circular={true}
                style={{ marginLeft: "1rem" }}
              />
              <h3 style={{ margin: 0 }}>{player}</h3>
            </Grid.Row>
          ))}
      </Grid>
      {players.length > 0 && (
        <Grid.Row style={{ display: "flex", justifyContent: "center" }}>
          <Button
            primary={true}
            onClick={() => history.push("/game")}
            size="large"
          >
            Start Game!
          </Button>
        </Grid.Row>
      )}
    </Fragment>
  );
};

export default Home;
