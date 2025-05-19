import "./App.css";

function App() {
  return (
    <div className="App">
      <Job salary={90000} position="Senior sde" company="Amazon" />
      <Job salary={100000} position="junior sde" company="google" />
    </div>
  );
}
const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
};
export default App;
