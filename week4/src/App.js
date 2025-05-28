import "./App.css";
import Counter from "./Counter";
// import UserInfo from "./UserInfo";
import SelectedItems from "./SelectedItems";
import ShoppingCart from "./ShoppingCart";
import TicTacToe from "./TicTacToe";

function App() {
  return (
    <div className="App">
      {/* <UserInfo /> */}
      <Counter />
      <SelectedItems />
      <ShoppingCart />
      <TicTacToe />
    </div>
  );
}

export default App;
