import React from "react";
import useCategoryState from "./useCategoryState";
import QuestionCard from "./QuestionCard";
import { Grid } from "semantic-ui-react";

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

export default CategoryRow;
