import React, { useState } from "react";
import "./App.css";
import GoalForm from "./component/GoalForm";
import ListOfGoals from "./component/ListOfGoals";
export default function App() {
  const [allGoals, updateAllGoals] = useState([]);

  const addGoals = (goal) => {
    updateAllGoals((prevGoals) => [...prevGoals, goal]);
  };

  return (
    <div className="App">
      <GoalForm onAdd={addGoals} />
      <ListOfGoals allGoals={allGoals} />
    </div>
  );
}
