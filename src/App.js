import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/pages/Hero/Hero';

function App() {
  return (

    <Router>
      <Navbar />
      <Hero />
      
      <Switch>
        <Route path='/' />
      </Switch>
    </Router>
  );
}

export default App;
