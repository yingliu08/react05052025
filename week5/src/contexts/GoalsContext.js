import { createContext, useState } from "react";

export const GoalsContext = createContext();

export default function GoalsContextProvider({ children }) {
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
    <GoalsContext.Provider
      value={{
        goals,
        setGoals,
        fitness,
        setFitness,
        category,
        setCategory,
        repetition,
        setRepetition,
        handleAchieved,
        handleAddGoal,
      }}
    >
      <div>{children}</div>
    </GoalsContext.Provider>
  );
}
