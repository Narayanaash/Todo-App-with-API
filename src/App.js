import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Todos from './components/todo/Todos';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
          <Switch>
            <Route exact path="/">
              <Todos />
            </Route>
            <Route path="/about" component={About} />
          </Switch>
        <Footer />
    </Router>
    )
  }
}

export default App;
