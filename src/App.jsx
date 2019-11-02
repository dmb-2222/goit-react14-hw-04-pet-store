import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from './components/Header'
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import PetPage from "./components/pages/PetPage";
import PetsPage from "./components/pages/PetsPage";
import ErrorPage from './components/pages/ErrorPage'


const App = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/pet/:petId" component={PetPage} />
      <Route path="/pets" component={PetsPage } />
      <Route component={ErrorPage} />
    </Switch>
  </div>
);

export default App;