import React, { useState, useEffect } from "react";
import Navigation from "./NavigationComponent";
import Home from "./HomeComponent";
import Beer from "./BeerComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";

const Main = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `http://api.brewerydb.com/v2/beers/?key=3f3f3ba75535847b0038530a898a42a1`
        //`https://rickandmortyapi.com/api/character`
      );
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/home" component={Home} />
        <Route
          exact
          path="/beer"
          render={() => <Beer isLoading={isLoading} items={items} />}
        />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
};

export default Main;
