import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ClickbaitsScreen.css";

const ClickbaitsScreen = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("http://localhost:3000/clickbaits");
        setQuestions(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des questions :", error);
      }
    };

    fetchQuestions();
  }, []);

  if (questions.length === 0) { // si on a pas de réponse
    return <p>No answer find</p>;
  }

  const currentQuestion = questions[currentIndex];

  const handleAnswerClick = (answer) => {
    if (selectedAnswer) return; // empêche de recliquer

    setSelectedAnswer(answer);

    if (answer === currentQuestion.answer) { //si on a la bonne réponse
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="quiz-container">
      <h1>CLICKBAITS</h1>

      <h2>{currentQuestion.title}</h2>
      <p>{currentQuestion.question}</p>

      <div className="answers">
        {[ 
          currentQuestion.proposition1,
          currentQuestion.proposition2,
          currentQuestion.proposition3,
          currentQuestion.proposition4,
        ].map((prop, index) => {
          let className = "answer-button";

          if (selectedAnswer) {
            if (prop === currentQuestion.answer) {
              className += " goodAnswer";
            } else if (prop === selectedAnswer) {
              className += " wrongAnswer";
            }
          }

          return (
            <button
              key={index}
              className={className}
              onClick={() => handleAnswerClick(prop)}
              disabled={selectedAnswer}
            >
              {prop}
            </button>
          );
        })}
      </div>

      {selectedAnswer && (
        <button className="next-btn" onClick={nextQuestion}>
          Next
        </button>
      )}

      <p>
        Question {currentIndex + 1} / {questions.length}
      </p>
      <p>Score : {score}</p>
    </div>
  );
};

export default ClickbaitsScreen;
