import React from 'react';
import classes from './Result.module.css';

const Result = (props) => {
  const {results} = props;

  return (
    <section className={classes.container}>
      {results.map(result => {
        return (
          <div className={classes.resultContainer} key={result.id}>
            <section className={classes.resultQuestion}>
              {result.question}
            </section>
            <section className={classes.resultAnswers}>
              {result.answers.map(answer => {
                if (answer.id === result.answer) {
                  return (
                    <div
                      key={answer.id} 
                      className={`${classes.resultAnswer} ${result.answer === result.correctAnswer ? classes.resultCorrect : classes.resultIncorrect}`}
                    >
                      {answer.text}
                    </div>
                  );
                }

                return null;
              })}
            </section>
          </div>
        );
      })}
    </section>
  );
}

export default Result;
