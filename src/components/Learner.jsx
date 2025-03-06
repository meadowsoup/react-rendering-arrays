import Score from "./Score";



function Learner({ learner }) {
     return (
          <div className="ghost-container">
               <h2>{learner.name}</h2>
               <p>{learner.bio}</p>
               
               <h3>Scores:</h3>

               <ul>
                    {learner.scores.map((score, index) => (
                         <Score key={index} score={score}/>
                    ))}
               </ul>
          </div>
     );
};


export default Learner;