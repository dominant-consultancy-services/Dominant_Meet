import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.scss';
import CallPage from './components/CallPage/CallPage';
import HomePage from './components/HomePage/HomePage';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/:id">
          <CallPage />
        </Route>
         <Route exact path="/">
          <HomePage/>
        </Route>
        <Route exact path="*">
          <NoMatch/>
        </Route> 
      </Switch>
    </Router>
  );
}

export default App;
