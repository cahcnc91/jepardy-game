import React from "react";
import { Grid } from "semantic-ui-react";
import "./Header.css";
import usePoints from "./usePoints";
import Points from "./Points";
// import AppBar from "./AppBar";

const Header = () => {
  const { points, addPoint, subtractPoint } = usePoints([
    "Thanuja",
    "Alex",
    "Marv",
    "Jithin",
    "Kyle",
    "Evan",
    "Jackie",
  ]);
  return (
    <>
      <Grid padded className="header-p">
        {/* <AppBar /> */}
        <Grid.Row className="patient-header">
          <Grid.Column className="patient-header-profile" computer={2}>
            <Points
              name="Thanuja"
              points={points["Thanuja"]}
              addPoint={addPoint}
              subtractPoint={subtractPoint}
            />
          </Grid.Column>
          <Grid.Column className="patient-header-profile" computer={2}>
            <Points
              name="Marv"
              points={points["Marv"]}
              addPoint={addPoint}
              subtractPoint={subtractPoint}
            />
          </Grid.Column>
          <Grid.Column className="patient-header-profile" computer={2}>
            <Points
              name="Alex"
              // @ts-ignore
              points={points["Alex"]}
              addPoint={addPoint}
              subtractPoint={subtractPoint}
            />
          </Grid.Column>
          <Grid.Column className="patient-header-profile" computer={2}>
            <Points
              name="Jithin"
              points={points["Jithin"]}
              addPoint={addPoint}
              subtractPoint={subtractPoint}
            />
          </Grid.Column>
          <Grid.Column className="patient-header-profile" computer={2}>
            <Points
              name="Evan"
              points={points["Evan"]}
              addPoint={addPoint}
              subtractPoint={subtractPoint}
            />
          </Grid.Column>
          <Grid.Column className="patient-header-profile" computer={2}>
            <Points
              name="Kyle"
              points={points["Kyle"]}
              addPoint={addPoint}
              subtractPoint={subtractPoint}
            />
          </Grid.Column>
          <Grid.Column className="patient-header-profile" computer={2}>
            <Points
              name="Jackie"
              points={points["Jackie"]}
              addPoint={addPoint}
              subtractPoint={subtractPoint}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Header;
