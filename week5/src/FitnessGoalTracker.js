import GoalsList from "./components/GoalsList";
import { useContext } from "react";
import { GoalsContext } from "./contexts/GoalsContext";
import { ThemeContext } from "./contexts/ThemeContext";

export default function FitnessGoalTracker() {
  const {
    fitness,
    setFitness,
    category,
    setCategory,
    repetition,
    setRepetition,
    handleAddGoal,
  } = useContext(GoalsContext);
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <div
      className={`container mt-5 p-4 ${
        theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"
      }`}
    >
      <button className="btn btn-secondary mb-3" onClick={handleTheme}>
        Switch Mode
      </button>
      <h2 className="text-center mb-4">Fitness Goal Tracker</h2>

      <div className="mb-3">
        <label className="form-label">Fitness Goal</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter fitness goal"
          value={fitness}
          onChange={(e) => setFitness(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Category</label>
        <select
          className="form-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Cardio">Cardio</option>
          <option value="Strength Training">Strength Training</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Repetitions</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter repetitions"
          value={repetition}
          onChange={(e) => setRepetition(e.target.value)}
        />
      </div>

      <button className="btn btn-success w-100 mb-4" onClick={handleAddGoal}>
        Add Goal
      </button>
      <GoalsList />
    </div>
  );
}
