
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormCases from "./Components/FormCase/FormCases";
import Opinion from "./Components/Opinion/Opinion"; 
import TemplateResults from './Components/Results/TemplateResults';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <FormCases />
        </Route>

        <Route path="/opiniones">
          <Opinion />
        </Route>

        <Route path="/detallecasos">
          <TemplateResults /> 
        </Route>
{/* 
         <Route path="/home">
          <Home /><Menu />
        </Route>

        <Route path="/casos">
          <FormCases />
        </Route>

        <Route path="/opiniones">
          <Opinion />
        </Route> */}

     
      </Switch>
    </Router>
  );
}

export default App;
