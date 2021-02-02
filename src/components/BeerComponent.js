import React, { Component } from "react";
import axios from "axios";

class Beer extends Component {
  componentDidMount() {
    axios
      .get(
        "http://api.brewerydb.com/v2/beers/?key=3f3f3ba75535847b0038530a898a42a1"
      )
      .then((response) => {
        console.log(response);
      });
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default Beer;
