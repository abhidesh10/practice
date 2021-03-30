import React, { Component } from "react";
import Person from "./Persons/Person";

const person = props =>
  props.persons.map((person, i) => (
    <Person
      key={person.id}
      name={person.name}
      age={person.age}
      click={() => props.clicked(i)}
      changed={event => props.changed(event, person.id)}
    />
  ));

export default person;
