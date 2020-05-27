import React from "react";
import { Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./global_styles";
import HomePage from "../src/screens/HomePage/HomePage";
import "./App.css";
import { Header } from "../src/components/header_component/header_component";
function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
