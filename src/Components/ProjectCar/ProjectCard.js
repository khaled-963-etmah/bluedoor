import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const projectcard = (props) => {
  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Body>
        <Card.Title>
          {props._id}
          {props.title}
        </Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Link to={props.url} >
          <Button variant="outline-secondary">Go to project</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
export default projectcard;
