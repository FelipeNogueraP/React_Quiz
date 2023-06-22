import Answer from "./Answer";
import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";

const Question = ({ questions }) => {
  const [quizState] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  console.log("current question", currentQuestion);
  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
      <div className="answers">
        {quizState.answers.map((answer, index) => (
          <Answer
            key={index}
            answerText={answer}
            isCorrect={answer.isCorrect}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
