import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import List from './List'
import Detail from './Detail'

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
            <List />
          </Route>
        </Switch>
      </Router>
    )
  
  
}

export default App;
