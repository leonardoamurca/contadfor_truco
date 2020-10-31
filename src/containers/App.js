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

  plusLeftHandler = () => {
    const count = {...this.state.leftTeam};
    count.counter += 2;

    this.setState({
      leftTeam: {
        name: this.state.leftTeam.name,
        counter: count.counter
      }
    });
  }

  minLeftHandler = () => {
    const count = { ...this.state.leftTeam };
    count.counter -= 2;

    this.setState({
      leftTeam: {
        name: this.state.leftTeam.name,
        counter: count.counter
      }
    });
  }

  plusRightHandler = () => {
    const count = { ...this.state.rightTeam };
    count.counter += 2;

    this.setState({
      rightTeam: {
        name: this.state.rightTeam.name,
        counter: count.counter
      }
    });
  }

  minRightHandler = () => {
    const count = { ...this.state.rightTeam };
    count.counter -= 2;

    this.setState({
      rightTeam: {
        name: this.state.rightTeam.name,
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
        plusLeft={this.plusLeftHandler}
        minLeft={this.minLeftHandler}
        plusRight={this.plusRightHandler}
        minRight={this.minRightHandler}
        />
      </div>
    );
  }
}

export default App;
