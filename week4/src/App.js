import "./App.css";
// import Counter from "./Counter";
// import UserInfo from "./UserInfo";
import SelectedItems from "./SelectedItems";
import ShoppingCart from "./ShoppingCart";
import TicTacToe from "./TicTacToe";
// import Games from "./Games";

function App() {
  return (
    <div className="App">
      {/* <Games /> */}
      {/* <UserInfo /> */}
      {/* <Counter /> */}
      <SelectedItems />
      <ShoppingCart />
      <TicTacToe />
    </div>
  );
}

export default App;
