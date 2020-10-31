import React from 'react';
import Team from '../../components/Team/Team';
import styles from './Teams.module.css';

const teams = ( props ) => {
  return (
    <div className={styles.Teams}>
      <Team 
        counter={props.leftCounter} 
        name={props.leftName} 
        change={(event) => props.nameChange(event, props.leftName)} 
        plusClick={props.plusLeft}
        minClick={props.minLeft}
        />
      
      <Team 
        counter={props.rightCounter} 
        name={props.rightName} 
        change={(event) => props.nameChange(event, props.rightName)} 
        plusClick={props.plusRight}
        minClick={props.minRight}
        />
    </div>
  );
}

export default teams;