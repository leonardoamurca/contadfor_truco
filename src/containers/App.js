import React, { Component } from 'react';
import logo from './assets/truco_logo.png';
import styles from  './App.module.css';
import Teams from '../containers/Teams/Teams';


class App extends Component {
  state = {
    leftTeam: {
      name: 'Team 01',
      counter: 0,
    },
    rightTeam: {
      name: 'Team 02',
      counter: 0,
    }
  }

  nameChangeHandler = (event, name) => {
    if(name === this.state.leftTeam.name) {
      const leftTeam = { ...this.state.leftTeam }
      leftTeam.name = event.target.value;
      
      this.setState({leftTeam: {
        name: leftTeam.name,
        counter: this.state.leftTeam.counter,
      }});

    } else {
      const rightTeam = { ...this.state.rightTeam }
      rightTeam.name = event.target.value;

      this.setState({
        rightTeam: {
          name: rightTeam.name,
          counter: this.state.rightTeam.counter,
        }
      });
    }
  }

  plus = (team) => {
    const count = {...this.state[team]};
    count.counter += 2

    this.updateTeamCounter(team, count)
  }

  minus = (team) => {
    const count = {...this.state[team]};
    count.counter -= 2

    this.updateTeamCounter(team, count)
  }


  updateTeamCounter(team, count){
    this.setState({
      [team]: {
        name: this.state[team].name,
        counter: count.counter
      }
    });
  }
  
  render() {
    return (
      <div className={styles.App}>
        <img src={logo}/>
        <Teams 
        rightCounter={this.state.rightTeam.counter}
        rightName={this.state.rightTeam.name}
        leftCounter={this.state.leftTeam.counter}
        leftName={this.state.leftTeam.name}
        nameChange={this.nameChangeHandler}
        plusLeft={() => this.plus("leftTeam")}
        minLeft={() => this.minus("leftTeam")}
        plusRight={() => this.plus("rightTeam")}
        minRight={() => this.minus("rightTeam")}
        />
      </div>
    );
  }
}

export default App;
