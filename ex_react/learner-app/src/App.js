// 1. import the data
import { learnerData } from "./data/learnerData";
// 2. import the State Hook
import { useState } from "react";

import Learner from "./components/Learner";

import "./App.css";

function App() {
  // 3. Initialize a new state for the learners data
  const [learners, setLearners] = useState(learnerData);

  return (
    <div className="App">
      <h1>Learner App</h1>

      {/* 4. Map over the data and render a Learner component for each object in the array */}

      <div>
        {learners.map((learner) => (
          <Learner learner={learner} key={learner.id} />
        ))}
      </div>

    </div>
  );
}

export default App;
