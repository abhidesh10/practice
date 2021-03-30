import React, { useState } from "react";
import "./App.css";
import Radium, { StyleRoot } from "radium";
import Person from "./Person/Person";

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: "0", name: "Max", age: "28" },
      { id: "1", name: "Many", age: "30" },
      { id: "2", name: "Sam", age: "32" }
    ]
  });

  const [otherState, setOtherState] = useState({
    otherState: "some other value"
  });

  const [showPersonState, setShowPersonState] = useState({
    showPerson: false
  });

  const toggelPersonHandler = () => {
    setShowPersonState({
      showPerson: !showPersonState.showPerson
    });
  };

  const nameChangedHandler = (event, id) => {
    const person = { ...personsState.persons[id] };
    person.name = event.target.value;

    const persons = [...personsState.persons];
    persons[id] = person;

    setPersonsState({ persons });
  };

  const deletePersonHandler = personIndex => {
    // const persons = personsState.persons.slice();
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);
    setPersonsState({ persons });
  };

  const style = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "lightgreen",
      color: "black"
    }
  };

  let person = null;

  if (showPersonState.showPerson) {
    person = (
      <div>
        {personsState.persons.map((person, i) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            click={() => deletePersonHandler(i)}
            changed={event => nameChangedHandler(event, person.id)}
          />
        ))}
      </div>
    );

    style.backgroundColor = "red";
    style[":hover"] = {
      backgroundColor: "salmon",
      color: "black"
    };
  }

  let classes = [];
  if (personsState.persons.length <= 2) classes.push("red");
  if (personsState.persons.length <= 1) classes.push("bold");

  return (
    <StyleRoot>
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <button style={style} onClick={() => toggelPersonHandler()}>
          Change Name
        </button>
        {person}
      </div>
    </StyleRoot>
  );
};

export default Radium(app);
