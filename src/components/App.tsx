import { Route } from "react-router-dom";

import Main from "./Main";
import Profile from "./Profile";

function App() {
  return (
    <div>
      <Route exact path="/" component={Main} />
      <Route path="/profile" component={Profile} />
    </div>
  );
}

export default App;
