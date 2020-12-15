import React, { useState } from "react";
import { Segment, Divider } from "semantic-ui-react";
import "./QuestionCard.css";

const QuestionCard = ({
  title,
  children,
  answer,
  question,
  group,
  setGroup,
}) => {
  const [expanded, setExpand] = useState(false);

  if (group[question] === false) {
    return (
      <Segment
        onClick={() => setGroup(question)}
        style={{
          height: "130px",
          padding: 0,
        }}
      >
        {!expanded && (
          <>
            <div
              className="card-non-expanded"
              onClick={(e) => {
                e.stopPropagation();
                setExpand(!expanded);
              }}
            >
              <p style={{ fontSize: "36px" }}>{title}</p>
            </div>
          </>
        )}
        {expanded && (
          <>
            <Divider className="summary-panel-divider" />
            <p style={{ padding: "1rem" }}>{children}</p>
          </>
        )}
      </Segment>
    );
  }
  return (
    <Segment
      style={{
        height: "130px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E5E5E5",
      }}
    >
      {answer}
    </Segment>
  );
};

export default QuestionCard;
