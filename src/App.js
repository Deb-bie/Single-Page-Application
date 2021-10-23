import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Hero from './components/pages/Hero/Hero';
import Services from './components/pages/Services/Services';
import Discovery from './components/pages/Discovery/Discovery';
import SignUp from './components/pages/Signup/signup';

function App() {
  return (

    <Router>
     
      <Switch>

        <Route exact path='/' component={Navbar} />
        <Route path='/signup' component={SignUp} exact />

      </Switch>


    </Router>
  );
}

export default App;
