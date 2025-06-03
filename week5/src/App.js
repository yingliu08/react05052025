import "./App.css";
// import FetchData from "./FetchData";
import FitnessGoalTracker from "./FitnessGoalTracker";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      />

      <FitnessGoalTracker />
      {/* <FetchData /> */}
    </div>
  );
}

export default App;
