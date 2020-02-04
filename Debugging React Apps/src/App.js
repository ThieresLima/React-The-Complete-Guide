import React, { Component } from 'react';
import styles from './App.module.css'
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };


  render() {

    let btnClass = styles.btn;
    let persons = true;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            </ErrorBoundary>
          })}
        </div>
      );
      btnClass = styles.btnRed;
    };

    const text = [];
    if (this.state.persons.length <= 2) {
      text.push(styles.red)
    }
    if (this.state.persons.length <= 1) {
      text.push(styles.bold)
    }

    return (
      <div className={styles.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={text.join(' ')}>This is really working!</p>
        <button className={btnClass}
          onClick={this.togglePersonHandler}>Switch</button>
        {persons}
      </div>
    );
  }
}

export default App;

// https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/