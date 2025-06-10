import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import TodoDetails from "./pages/TodoDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="todoContainer">
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/todos/:id" component={TodoDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
