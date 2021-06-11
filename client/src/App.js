import Home from "./pages/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Category from "./pages/category";
import More from "./pages/more";
import Read from "./pages/read";
import Reading from "./pages/reading";
import Login from "./pages/login";
import SignUp from "./pages/signup";

import "antd/dist/antd.css";
import "./App.css";

import Setting from "./components/setting";
import Type from "./pages/type";
import Profile from "./pages/profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path='/route/:id' exact component={MyComponent} /> */}
          <Route exact path="/" component={Home} />

          <Route exact path="/category/:id" component={Category} />

          <Route exact path="/type/:id" component={Type} />

          <Route exact path="/more" component={More} />

          <Route exact path="/read/:id" component={Read} />

          <Route exact path="/read/:id/reading" component={Reading} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/setting" component={Setting} />

          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
