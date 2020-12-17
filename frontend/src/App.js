import React, { Fragment, useEffect, useState } from "react";
import { Grid, Loader } from "semantic-ui-react";
import QuestionCard from "./components/QuestionCard";
import Header from "./components/Header";
import useCategoryState from "./components/useCategoryState";
import "./App.css";

function App() {
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
      <Header />
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
}

const CategoryRow = ({ data, title }) => {
  const [category, setCategory] = useCategoryState();
  return (
    <>
      <div className="ft-large-bold patient-summary-results-header">
        {title}
      </div>
      <Grid.Row className="patient-summary-grid">
        {data.map((item, i) => (
          <Grid.Column className="patient-summary-grid-column">
            <QuestionCard
              group={category}
              item={item}
              answer={item.answer}
              question={i + 1}
              setGroup={setCategory}
              title={item.difficulty}
            >
              {item.question}
            </QuestionCard>
          </Grid.Column>
        ))}
      </Grid.Row>
    </>
  );
};

export default App;
