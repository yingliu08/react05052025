import GoalsListItem from "./GoalsListItem";
import { useContext } from "react";
import { GoalsContext } from "../contexts/GoalsContext";
export default function GoalsList() {
  const { goals } = useContext(GoalsContext);
  return (
    <div>
      {goals.map((goal) => (
        <GoalsListItem key={goal.goalId} goal={goal} />
      ))}
    </div>
  );
}
