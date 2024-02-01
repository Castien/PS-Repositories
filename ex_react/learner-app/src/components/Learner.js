import Score from "./Score";

function Learner({ learner }) {
  const { name, bio, scores } = learner;
  return (
    <div>
      {/* Display name  */}
      <p>
        <b>Name: </b>
        {name}
      </p>

      {/* Display Bio  */}
      <p>
        <b>Bio: </b>
        {bio}
      </p>

      {/* Display Scores  */}
      <div>
        {scores.map((score) => (
          <Score score={score} />
        ))}
      </div>
      <hr />
    </div>
  );
}

export default Learner;
