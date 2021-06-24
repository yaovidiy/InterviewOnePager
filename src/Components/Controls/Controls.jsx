import React from 'react';
import classes from './Controls.module.css';

const Controls = (props) => {
  const {reset, confirm, canConfirm} = props;

  return (
    <section className={classes.controlsContainer}>
      <div className={classes.controlsButtons}>
        <button onClick={() => reset()} className={classes.reset}>Reset</button>
        <button disabled={!canConfirm} onClick={() => confirm()} className={classes.confirm}>Confirm</button>
      </div>
    </section>
  );
}

export default Controls;