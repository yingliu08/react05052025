import { useState } from "react";
export default function FitnessGoalTracker() {
  const [id, setId] = useState(1);
  const [goals, setGoals] = useState([]);
  const [fitness, setFitness] = useState("");
  const [category, setCategory] = useState("Cardio");
  const [repetition, setRepetition] = useState("");

  function handleAddGoal() {
    const newGoal = {
      goalId: id,
      goalFitness: fitness,
      goalCategory: category,
      goalRepetition: repetition,
      goalIsAchieved: false,
    };
    setId((prevId) => prevId + 1);
    setGoals([...goals, newGoal]);
    setFitness("");
    setCategory("Cardio");
    setRepetition("");
  }
  function handleAchieved(id) {
    setGoals(
      goals.map((goal) => {
        return goal.goalId === id
          ? { ...goal, goalIsAchieved: !goal.goalIsAchieved }
          : goal;
      })
    );
  }
  return (
    <div className="container mt-5 p-4  ">
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
      {goals.map((goal) => {
        const {
          goalId,
          goalFitness,
          goalCategory,
          goalRepetition,
          goalIsAchieved,
        } = goal;
        return (
          <div
            key={goalId}
            style={{
              textDecoration: goalIsAchieved === true ? "line-through" : "none",
            }}
          >
            {goalFitness} -<strong> {goalCategory} </strong>
            {goalCategory === "Cardio"
              ? " (" + goalRepetition + " minutes)"
              : " (" + goalRepetition + " repetitions)"}
            <button
              className="btn btn-primary btn-sm"
              onClick={() => handleAchieved(goalId)}
            >
              Mark as Achieved
            </button>
          </div>
        );
      })}
    </div>
  );
}
