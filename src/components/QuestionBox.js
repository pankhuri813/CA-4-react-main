import React, {useRef} from 'react';



export default function QuestionBox({questions,optionClicked,currentQuestion}) {

  const focusQuestion = useRef();

  function handleFocus(){
    focusQuestion.current.style.color = "red";
  }

  function handleNoFocus(){
    focusQuestion.current.style.color = "darkblue";
  }

  return (      
      <div className="question-card" >
        <h2>
          Question: {currentQuestion + 1} out of {questions.length}
        </h2>
        <h3 ref={focusQuestion} className="question-text">{questions[currentQuestion].text}</h3>

        <ul>
          {questions[currentQuestion].options.map((option) => {
            return (
              <li
                key={option.id}
                onClick={() => optionClicked(option.isCorrect)}
              >
                {option.text}
              </li>
            );
          })}
        </ul>

        <button onClick={handleFocus}>Highlight</button>
        <button onClick={handleNoFocus}>Remove Highlight</button>
    </div>

          
        
      

  
  )
}
