import React from 'react';
import classes from './List.module.css';

const List = (props) => {
  const {
    options, 
    setAnswer, 
    selectedAnswer
  } = props;

  return (
    <section className={classes.container}>
      {options.map(option => {
        return (
          <div 
            key={option.id} 
            className={`${classes.optionContainer} ${selectedAnswer === option.id ? classes.active : ''}`} 
            onClick={() => setAnswer(option.id)}>
            <div className={classes.optionText}>
              {option.text}
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default List;