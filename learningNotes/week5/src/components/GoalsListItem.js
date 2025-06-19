import { useContext } from "react";
import { GoalsContext } from "../contexts/GoalsContext";

export default function GoalsListItem({ goal }) {
  const { goalId, goalFitness, goalCategory, goalRepetition, goalIsAchieved } =
    goal;
  const { handleAchieved } = useContext(GoalsContext);
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
}
