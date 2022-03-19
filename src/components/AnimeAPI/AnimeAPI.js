import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

const AnimeAPI = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("https://animes3.p.rapidapi.com/", {
      method: "GET",
      headers: {
        "x-rapidapi-host": `${process.env.NEXT_PUBLIC_API_HOST}`,
        "x-rapidapi-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {users.length > 0 && (
        <ul>
          <Container>
            <Row>
              {users.slice(0, 20).map((user) => (
                <Col key={user.id} xs="12" sm="4">
                  <CardGroup className="mw-100">
                    <Card className="m-2 border-0">
                      <Image
                        alt="Card image cap"
                        src={user.img}
                        width="400px"
                        height="400px"
                        objectFit="contain"
                      />
                      <CardBody
                        style={{
                          height: "101px",
                          position: "relative",
                          textAlign: "center",
                        }}
                      >
                        <CardTitle tag="h6">{user.title}</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          {user.name}
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                  </CardGroup>
                </Col>
              ))}
            </Row>
          </Container>
        </ul>
      )}
    </div>
  );
};

export default AnimeAPI;
