import React from 'react';
import classes from './Question.module.css';

const Question = (props) => {
  return (
    <section className={classes.container}>
      <span>{props.questionText}</span>
    </section>
  );
}

export default Question;