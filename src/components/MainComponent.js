import React, { useState, useEffect } from 'react';
import Navigation from './NavigationComponent';
import Home from './HomeComponent';
import Beer from './BeerComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

const Main = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `http://localhost:3000/brewery/beers`
        //`https://rickandmortyapi.com/api/character`
      );
      console.log(result.data);
      setItems(result.data.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/beer" render={() => <Beer isLoading={isLoading} items={items} />} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
};

export default Main;
