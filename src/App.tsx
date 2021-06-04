import styled from "styled-components";
import AppHeader from "./components/AppHeader";
import backgroundImage from "./assets/dark_space.jpg";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route }  from "react-router-dom";
import AppFooter from "./components/AppFooter";
import Detail from "./components/Detail";
function App() {
  return (
    <AppContainer>
      <Router>
        <Switch>
          <Route path="/" exact>
            <AppHeader/>
            <Home/>
          </Route>
          <Route path="/detail" exact>
            <Detail/>
          </Route>
        </Switch>
      </Router>
      <AppFooter/>
    </AppContainer>
  );
}

const AppContainer = styled.div`

`
export default App;

