import "./App.css";
import Counter from "./Counter";
// import UserInfo from "./UserInfo";
import SelectedItems from "./SelectedItems";
import ShoppingCart from "./ShoppingCart";

function App() {
  return (
    <div className="App">
      {/* <UserInfo /> */}
      <Counter />
      <SelectedItems />
      <ShoppingCart />
    </div>
  );
}

export default App;
