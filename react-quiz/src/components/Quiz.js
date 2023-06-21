import { useContext } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log("QuizState", quizState);

  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Congratulations</div>
          <div className="results-info">
            <div>You have completed the quiz.</div>
            <div>
              You've got {quizState.score} out of {quizState.questions.length}{" "}
              correct
            </div>
          </div>
          <div
            className="next-button"
            onClick={() => dispatch({ type: "RESTART" })}
          >
            Restart
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <div className="score">
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Question />
          <div
            className="next-button"
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          >
            Next question
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
