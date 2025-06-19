import GoalsContextProvider from "./contexts/GoalsContext";
import FitnessGoalTracker from "./FitnessGoalTracker";
import ThemeContextProvider from "./contexts/ThemeContext";

export default function App() {
  return (
    <ThemeContextProvider>
      <GoalsContextProvider>
        <div className="App">
          <FitnessGoalTracker />
        </div>
      </GoalsContextProvider>
    </ThemeContextProvider>
  );
}
