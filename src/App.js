import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import Detail from './pages/Detail'

const App = () => {
  
 
    return(
      <Router>           
      <Switch>
        <Route
              path="/movie/:movieId"
              exact 
              render={(props) => (
                  <Detail {...props} />
              )}
            />        
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    )
  
  
}

export default App;
