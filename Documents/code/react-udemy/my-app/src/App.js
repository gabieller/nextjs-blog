import { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Gabriela", age: 26 },
      { name: "Jhonata", age: 27 },
      { name: "Manoel", age: 6 },
    ],
  };

  switchNameHander = () => {
    // console.log("Was cliked!");
    this.setState({
      persons: [
        { name: "Bibica", age: 26 },
        { name: "Jhoninha", age: 27 },
        { name: "Manoel", age: 5 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hi, I'm a react project</h1>
          <button onClick={this.switchNameHander}>Switch Name</button>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
          >
            {" "}
            My hobbies are: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </header>
      </div>
    );
  }
}

export default App;
