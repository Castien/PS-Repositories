function Score({ score }) {
  return (
    <ul>

        {/* Display Date  */}
      <li>
        <b>Date: </b>
        {score.date}
      </li>

      {/* Display Scores  */}
      <li>
        <b>Score: </b>
        {score.score}
      </li>
    </ul>
  );
}

export default Score;
