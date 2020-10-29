//import { Router } from 'react-router-dom';
import './App.css';
import Side_Nav from './side_nav/Side_Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Chats from './chats/Chats';
import LiveChat from './live_chat/LiveChat'
function App() {
  return (
    <>
      <Router>
        <Side_Nav/>
        <Switch>
          <Route path='/' />
        </Switch>
      </Router>
      <div className="row m-0">
        <div className="col-sm-2">

        </div>
        <div className="col-sm-5">
        <Router>
          <Chats/>
          <Switch>
            <Route path='/' />
          </Switch>
        </Router>
          </div>
          <div className="col-sm-5">
          <Router>
           <LiveChat/>
            <Switch>
              <Route path='/' />
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
