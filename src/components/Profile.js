import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardImg, Spinner } from "react-bootstrap";

const Profile = ({ match }) => {
  const [user, setuser] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${match.params.id}`
        );

        console.log(data);
        setuser(data);
        setLoad(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [match]);
  if (load) {
    return <Spinner animation="border" variant="danger" />;
  }
  return (
    <div>
      <Card style={{ width: "10rem" }}>
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
      </Card>
    </div>
  );
};

export default Profile;