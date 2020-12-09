import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import LoginComponent from './component/pages/LoginComponent';
import ErrorComponent from './component/pages/ErrorComponent';
import Navbar from './component/Navbar';
import HomePage from './component/pages/HomePage';
import LocationComponent from './component/pages/LocationComponent';

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact component={HomePage}></Route>
          <Route path='/sign-in' component={LoginComponent}></Route>
          <Route path='/locations' component={LocationComponent}></Route>
          <Route path='' component={ErrorComponent}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
