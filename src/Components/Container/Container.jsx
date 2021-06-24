import React, { useEffect, useState, useCallback } from 'react';
import classes from './Container.module.css';
import Question from '../Description/Question.jsx';
import Answers from '../List/List.jsx';
import Controls from '../Controls/Controls.jsx';
import Result from '../Result/Result';
import questionsList from '../Data/questions.js';

function Container() {
  const [questions, setQuestions] = useState(questionsList);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(null);

    const reset = () => {
      setSelectedAnswer(null);
    };

    const confirm = () => {
      const copyArray = [...questions];
      copyArray.some((question, index, array) => {
        if (question.id === currentQuestion.id) {
          array[index].answer = selectedAnswer;

          return true;
        }

        return false;
      });
      
      setSelectedAnswer(null);
      setQuestions(copyArray);
    };

    const isSomeQuestionsLeft = useCallback(() => {
      return questions.some(question => {
        return question.answer === null;
      });
    }, [questions])

    const getRandomQuestion = useCallback(() => {
      const randomIndex = Math.floor(Math.random() * questions.length);
      const randomQuestion = questions[randomIndex];
      
      if (randomQuestion.answer !== null) {
        return getRandomQuestion();
      }

      return randomQuestion;
    }, [questions]);

    useEffect(()=> {
      const isNoMoreQuestionsLeft = isSomeQuestionsLeft();

      if (!isNoMoreQuestionsLeft) {
        return;
      }

      const randomQuestion = getRandomQuestion();

      setCurrentQuestion(randomQuestion);
    }, [getRandomQuestion, isSomeQuestionsLeft]);

  if (!currentQuestion) {
    return null;
  }

  if (!isSomeQuestionsLeft()) {
    return <Result results={questions} />
  }

  return (
    <div className={classes.Container}>
      <Question questionText={currentQuestion.question} />
      <Answers 
        options = {currentQuestion.answers} 
        setAnswer = {setSelectedAnswer} 
        selectedAnswer={selectedAnswer} 
      />
      <Controls
        confirm={confirm}
        reset={reset}
        canConfirm={selectedAnswer !== null}
      />
    </div>
  );
}

export default Container;
