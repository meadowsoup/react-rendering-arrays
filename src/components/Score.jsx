


function Score({ score }) {
     return (
          <li className="score-box">
               <strong>Date:</strong> {score.date} | <strong>Score:</strong> {score.score}
          </li>
     );
}


export default Score;