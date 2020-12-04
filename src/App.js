import React, { Component } from "react";
import Dog from "./components/Dog";
import Form from "./components/Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
    };
    this.getDogs = this.getDogs.bind(this);
    this.updateDog = this.updateDog.bind(this);
  }

  updateDog(newDog) {
    this.setState({
      dogs: [...this.state.dogs, newDog.data],
    });
  }

  getDogs() {
    fetch("http://localhost:8000/api/v1/dogs/")
      .then((data) => {
        console.log(data);
        return data.json();
      })
      .then((json) => {
        console.log(json);
        this.setState({
          dogs: json.data,
        });
      });
  }

  componentDidMount() {
    this.getDogs();
  }

  render() {
    return (
      <div>
        <h3>Hello</h3>
        <table>
          <thead>
            <th>Name</th>
            <th>Owner</th>
            <th>Breed</th>
          </thead>
          {this.state.dogs.map((dog) => {
            return <Dog dog={dog} />;
          })}
        </table>
        <Form updateDog={this.updateDog} />
      </div>
    );
  }
}