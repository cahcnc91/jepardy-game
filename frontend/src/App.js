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
        </Grid>
      )}
    </Fragment>
  );
}

const TvRow = () => {
  const [science, setScience] = useCategoryState();
  return (
    <>
      <Grid.Row className="patient-summary-grid">
        <Grid.Column className="patient-summary-grid-column">
          <QuestionCard
            group={science}
            title="100"
            answer="King’s Landing"
            question={1}
            setGroup={setScience}
          >
            What is the capital of Westeros in Game of Thrones?
          </QuestionCard>
        </Grid.Column>
        <Grid.Column className="patient-summary-grid-column">
          <QuestionCard
            group={science}
            title="200"
            answer="Carol Baskin"
            question={2}
            setGroup={setScience}
          >
            Name of Tiger's King main rival?
          </QuestionCard>
        </Grid.Column>
        <Grid.Column className="patient-summary-grid-column">
          <QuestionCard
            group={science}
            title="300"
            answer="Neddle"
            question={3}
            setGroup={setScience}
          >
            What is the name of Arya Stark's sword in "Game of Thrones"?
          </QuestionCard>
        </Grid.Column>
        <Grid.Column className="patient-summary-grid-column">
          <QuestionCard
            group={science}
            title="400"
            answer="Piano falls on him"
            question={4}
            setGroup={setScience}
          >
            How does Charlie Harper die in Two and a Half Men?
          </QuestionCard>
        </Grid.Column>
        <Grid.Column className="patient-summary-grid-column">
          <QuestionCard
            group={science}
            title="500"
            answer="Creed"
            question={5}
            setGroup={setScience}
          >
            Which character becomes a wanted fugitive during the final season of
            The Office?
          </QuestionCard>
        </Grid.Column>
      </Grid.Row>
    </>
  );
};

const GeneralKnewledgeRow = () => {
  const [science, setScience] = useCategoryState();
  return (
    <>
      <Grid.Row className="patient-summary-grid">
        <Grid.Column className="patient-summary-grid-column">
          <QuestionCard
            group={science}
            title="100"
            answer="Japan"
            question={1}
            setGroup={setScience}
          >
            Yen is the currency of which country?
          </QuestionCard>
        </Grid.Column>
        <Grid.Column className="patient-summary-grid-column">
          <QuestionCard
            group={science}
            title="200"
            answer="Mike Pence"
            question={2}
            setGroup={setScience}
          >
            Who is Donald Trump's vice president?
          </QuestionCard>
        </Grid.Column>
        <Grid.Column className="patient-summary-grid-column">
          <QuestionCard
            group={science}
            title="300"
            answer="Golf"
            question={3}
            setGroup={setScience}
          >
            What sport is played at Pebble Beach?
          </QuestionCard>
        </Grid.Column>
        <Grid.Column className="patient-summary-grid-column">
          <QuestionCard
            group={science}
            title="400"
            answer="Florida"
            question={4}
            setGroup={setScience}
          >
            Which US state has the Everglades National Park?
          </QuestionCard>
        </Grid.Column>
        <Grid.Column className="patient-summary-grid-column">
          <QuestionCard
            group={science}
            title="500"
            answer="Al Gore"
            question={5}
            setGroup={setScience}
          >
            Who ran against George W. Bush in the Presidential election of 2000?
          </QuestionCard>
        </Grid.Column>
      </Grid.Row>
    </>
  );
};

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

const ScienceRow = () => {
  const [science, setScience] = useCategoryState();
  return (
    <>
      <Grid.Row className="patient-summary-grid">
        <Grid.Column className="patient-summary-grid-column">
          <QuestionCard
            group={science}
            title="100"
            answer="Chromosomes"
            question={1}
            setGroup={setScience}
          >
            What do most humans have 23 pairs of?
          </QuestionCard>
        </Grid.Column>
        <Grid.Column className="patient-summary-grid-column">
          <QuestionCard
            title="200"
            answer="Na"
            question={2}
            group={science}
            setGroup={setScience}
          >
            What is the chemical symbol for Sodium?
          </QuestionCard>
        </Grid.Column>
        <Grid.Column className="patient-summary-grid-column">
          <QuestionCard
            title="300"
            answer="-40"
            question={3}
            group={science}
            setGroup={setScience}
          >
            At what temperature are Celsius and Fahrenheit equal
          </QuestionCard>
        </Grid.Column>
        <Grid.Column className="patient-summary-grid-column">
          <QuestionCard
            title="400"
            answer="Diamond"
            question={4}
            group={science}
            setGroup={setScience}
          >
            What is the hardest known naturally-occurring material? <br />
          </QuestionCard>
        </Grid.Column>
        <Grid.Column className="patient-summary-grid-column">
          <QuestionCard
            title="500"
            answer="Force"
            question={5}
            group={science}
            setGroup={setScience}
          >
            What is equal to mass times acceleration?
          </QuestionCard>
        </Grid.Column>
      </Grid.Row>
    </>
  );
};

export default App;
