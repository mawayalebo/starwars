import styled from "styled-components";
import AppHeader from "./components/AppHeader";
import backgroundImage from "./assets/dark_space.jpg";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route }  from "react-router-dom";
import AppFooter from "./components/AppFooter";
import { ApolloConsumer } from "@apollo/client";
function App() {
  return (
    <AppContainer>
      <AppHeader/>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
        </Switch>
      </Router>
      <AppFooter />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  background: url(${backgroundImage});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  margin: 0 !important;
  height: 3000px;

`
export default App;

