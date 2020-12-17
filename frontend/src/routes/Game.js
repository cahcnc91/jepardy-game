import React, { Fragment, useEffect, useState } from "react";
import { Grid, Loader } from "semantic-ui-react";
import Header from "../components/Header";
import CategoryRow from "../components/CategoryRow";

const Game = ({ players }) => {
  const [categories, setCategories] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://localhost:5000/all-categories");
      if (data.ok) {
        const list = await data.json();
        setCategories(list);
        setLoading(false);
      } else {
        setError("Something went wrong, please refresh the page.");
      }
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      <Header players={players} />
      {loading ? (
        <Loader active inline="centered" />
      ) : (
        <Grid padded style={{ display: "flex", width: "100%" }}>
          <CategoryRow data={categories.history} title="History" />
          <CategoryRow data={categories.computer} title="Computer" />
          <CategoryRow data={categories.tv} title="Tv Shows" />
          <CategoryRow data={categories.science} title="Science" />
          <CategoryRow data={categories.general} title="General Knowledge" />
        </Grid>
      )}
    </Fragment>
  );
};

export default Game;
