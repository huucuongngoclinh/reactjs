import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

// import { white } from 'ansi-colors';

// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    persons: [
      {id: "1", name: "John", age: 25},
      {id: "2", name: "Max", age: 26},
      {id: "3", name: "Iric", age: 27}
    ],
    showPerson: false
  }

  switchNameHander = (newName) => {
    console.log("Was click!");
    this.setState({
      persons: [
        {name: newName, age: 35},
        {name: "Max Min", age: 36},
        {name: "Iric Max", age: 37},
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    const persons = this.state.persons;
    persons[personIndex] = person;

    person.name = event.target.value;

    this.setState({ persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow})
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  // usernameChangedHandler = (event) => {
  //   this.setState({username: event.target.value});
  // }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

    let persons = null;

    if (this.state.showPerson){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              key={index}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }

    let classes = [];
    if (this.state.persons.length <= 2){
      classes.push('red');
    }
    if (this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
        <div className="App">
          <h1>Hi I am a react app </h1>
          <p className={classes.join(' ')}>It OK...</p>
          <button style={style} 
            onClick={this.togglePersonsHandler}>Switch Name</button>
          {persons}

          {/* <UserInput changed={this.usernameChangedHandler} 
            currentName={this.state.username}/>
          <UserOutput userName={this.state.username}/>
          <UserOutput userName={this.state.username}/>
          <UserOutput userName="Min"/> */}
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "I am James"));
  }
}

export default App;
