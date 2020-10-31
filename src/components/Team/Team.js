import React from 'react';
import styles from './Team.module.css';

const team = ( props ) => {
  let classes = [];
  classes.push(styles.buttonContainer);
  return (
    <div className={styles.Team}>
      <p>{props.name}</p>
      <input type="text" value={props.name} onChange={props.change}/>
      <br/>
      <div className={classes.join(' ')}>
        <button onClick={props.minClick}>-</button>
        <button onClick={props.plusClick}>+</button>
      </div>
      <p>{props.counter}</p>
    </div>
  );
}

export default team;