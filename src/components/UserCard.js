import React from "react";
import { Button, Card, CardImg } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div>
      <Card style={{ width: "14rem" }}>
        <span className="profil">{user.name[0]}</span>
        <CardImg
         top
         width="50%"
         src="https://www.usgamblingsites.com/wp-content/uploads/2021/01/Man-Avatar-1-e1611002285154.jpg"
         alt="Card image cap"
       />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.username}</Card.Text>
          <Card.Text>{user.email}</Card.Text>
        </Card.Body>
        <Link to={`/Profile/${user.id}`}>
          <Button variant="danger">See profile</Button>
        </Link>
      </Card>
    </div>
  );
};

export default UserCard;