import React from "react";

export default function GoalForm(props) {
  const [goal, setGoal] = React.useState({ goal: "", by: "" });
  const goalHandler = (e) => {
    setGoal({ ...goal, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onAdd(goal);
    setGoal({ goal: "", by: "" });
  };
  return (
    <div>
      <h1>My Goals App</h1>
      <form onSubmit={submitHandler}>
        <input
          value={goal.goal}
          type="text"
          name="goal"
          placeholder="goal"
          onChange={goalHandler}
        />
        <input
          value={goal.by}
          type="text"
          name="by"
          placeholder="by..."
          onChange={goalHandler}
        />
        <button>Submit Goal</button>
      </form>
    </div>
  );
}
