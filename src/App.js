import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import Counter from './pages/Counter';
import About from './pages/About';

function App() {
  return (
    <Provider store={store}>
      <h1>i am a redux app</h1>
      <Router>
        <Switch>
          <Route exact path='/' component={Counter} />
          <Route exact path='/about' component={About} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
