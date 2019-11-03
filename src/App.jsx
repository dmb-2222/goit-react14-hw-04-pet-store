import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from './components/pets/Header'
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PetPage from "./pages/PetPage";
import PetsPage from "./pages/PetsPage";
import ErrorPage from './pages/ErrorPage'


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