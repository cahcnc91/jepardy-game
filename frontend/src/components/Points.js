import React from "react";
import "./Points.css";
import { Header, Table, Button, Icon } from "semantic-ui-react";

const Points = ({ name, points, addPoint, subtractPoint }) => {
  return (
    <>
      <Header
        id="PatientNameHeader"
        className="patient-profile-header patientHeaderName"
        as="h4"
      >{`${name}`}</Header>
      <Table singleLine className="profile-table-header">
        <Table.Body>
          <Table.Row className="profile-table-row">
            <Table.Cell width={1}>
              <p className="data-label-small-primary patient-profile-label">
                Points: <b>{points}</b>
              </p>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="profile-table-row">
            <Table.Cell width={1}>
              <Button onClick={() => addPoint(name)}>
                <Icon name={"add"} fitted />
              </Button>
              <Button onClick={() => subtractPoint(name)}>
                <Icon name={"minus"} fitted />
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};

export default Points;
