import React, { Fragment, useState } from "react";
import { Grid, Form, Button, GridRow, Icon } from "semantic-ui-react";
import { useForm } from "../components/useForm";

const optionsCat = [
  { key: "1", text: "Computer", value: "computer" },
  { key: "2", text: "History", value: "history" },
  { key: "3", text: "General Knowledge", value: "general" },
  { key: "4", text: "Tv Shows", value: "tv" },
  { key: "5", text: "Science", value: "science" },
];

const optionsDiff = [
  { key: "1d", text: "100", value: 100 },
  { key: "2d", text: "200", value: 200 },
  { key: "3d", text: "300", value: 300 },
  { key: "4d", text: "400", value: 400 },
  { key: "5d", text: "500", value: 500 },
];

const AddQuestions = () => {
  const [success, setSuccess] = useState(false);
  const [form, changeForm] = useForm({
    question: "",
    category: "computer",
    answer: "",
    difficulty: 100,
  });

  const submitQuestion = async () => {
    fetch("http://localhost:5000/create", {
      method: "POST",
      headers: {
        content_type: "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setSuccess(true);
      });
  };

  return (
    <Fragment>
      <Grid style={{ display: "flex", width: "100%", padding: "5rem" }}>
        <Grid.Row>
          <h2>Add question to database</h2>
        </Grid.Row>
        {success ? (
          <h3 style={{ padding: 0 }}>
            Success! You have submitted a question to out db!
          </h3>
        ) : (
          <Form style={{ width: "50%", padding: 0 }}>
            <Form.Group style={{ display: "flex", flexDirection: "column" }}>
              <Form.Input
                label="Question"
                id="question"
                value={form.question}
                onChange={changeForm}
                className="form-input"
              />
              <Form.Input
                label="Answer"
                id="answer"
                value={form.answer}
                onChange={changeForm}
                className="form-input"
              />
              <Form.Select
                id={"category"}
                label="Category"
                options={optionsCat}
                onChange={changeForm}
                defaultValue={"computer"}
                className="form-input"
              />
              <Form.Select
                id="difficulty"
                label="Difficulty"
                options={optionsDiff}
                defaultValue={100}
                onChange={changeForm}
                className="form-input"
              />
              <Form.Button
                primary={true}
                padding
                onClick={() => submitQuestion()}
              >
                Submit
              </Form.Button>
            </Form.Group>
          </Form>
        )}
      </Grid>
    </Fragment>
  );
};

export default AddQuestions;
