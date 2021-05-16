
//import './App.css';
import SearchForm from './Form/SearchForm'
import Home from './SwapiHome/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
         <SearchForm />
        </Route>
        <Route path="/" >
          <Home />
        </Route>
      </Switch>
    </Router>
    
   
  );
}

export default App;
