
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormCases from "./Components/FormCase/FormCases";
import Opinion from "./Components/Opinion/Opinion"; 
import TemplateResults from './Components/Results/TemplateResults';

/*Vistas*/
import Login from './Vistas/Login';
import Home from './Vistas/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>

        <Route path="/home">
          <Home/>
        </Route>

        <Route path="/casos">
          <FormCases />
        </Route>

        <Route path="/opiniones">
          <Opinion />
        </Route>

        <Route path="/detallecasos">
          <TemplateResults />
        </Route> 

     
      </Switch>
    </Router>
  );
}

export default App;
