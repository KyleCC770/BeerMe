import React from "react";
import {
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

function Home(props) {
  return (
    <div>
      <div className="Container  home-container ">
        <div className="flex-row row home-row justify-content-center">
          <Card
            className="text-center home-card rounded-0"
            style={{ width: "75%" }}
          >
            <CardImg top width="100%" src="Images/test-beer.jpeg" />
            <CardBody>
              <CardTitle>Test Title</CardTitle>
              <CardText>This is a test to see if this works</CardText>
              <Button outline color="dark">
                Press Me
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
