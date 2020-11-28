import './App.css';
import InputContainer from './components/InputContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import OutputContainer from './components/OutputContainer';
import HomeConatiner from './components/HomeConatiner';
function App() {
  return (
    <Router>
      <Route exact path="/">
        <HomeConatiner />
      </Route>
      <Route path="/input">
        <InputContainer />
      </Route>
      <Route path="/output">
        <OutputContainer />
      </Route>
    </Router>
  );
}

export default App;
