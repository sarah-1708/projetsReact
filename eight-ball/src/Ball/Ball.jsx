import { useState } from "react";

export default function Ball() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);

  const possibleAnswers = [
    "Oui",
    "C'est certain",
    "N'y compte pas",
    "Une chance sur deux",
    "Le sort en est jeté",
    "Pas d'avis",
    "Réessaie plus tard",
    "Non",
  ];

  function randomAnswer() {
    const randomIndex = Math.floor(Math.random() * possibleAnswers.length);
    return possibleAnswers[randomIndex];
  }

  function handleSubmit() {
    if (question.trim() !== "") {
      setAnswer(randomAnswer());
    } else {
      setAnswer(null);
    }
  }

  return (
    <div>
      <div className="ball">
        <div className="white-answer">
          {answer !== null ?  <p>{answer}</p> : <p>Posez une question</p>}
        </div>
      </div>

      <div className="flex">
        <input
          className="question"
          type="text"
          name="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>
          Soumettre la question
        </button>
      </div>
    </div>
  );
}
