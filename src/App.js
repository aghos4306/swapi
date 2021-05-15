
//import './App.css';
import SearchForm from './Form/SearchForm'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
         <SearchForm />
        </Route>
      </Switch>
    </Router>
    
   
  );
}

export default App;
