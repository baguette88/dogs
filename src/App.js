import logo from './logo.svg';
import './App.css';
import React, { Component } from "react"
import Dog from 'components/Dog.jsx'
import Form from 'components/Form.jsx'



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      name: "",
     owner: "",
      breed: ""
    };
    this.getDogs =this.getDogs.bind(this)
    }

  
  getDogs() {
    fetch("http://localhost:8000/api/v1/dogs")
    .then((data) => {
      console.log(data);
      return data.json();
    })
    .then((json) => {
      this.setState({
        dogs: json.data,
      });
    });
  }
  

  updateDog(name, owner, breed) {
    this.setState({
      name: name,
      owner: owner,
      breed: breed,

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
        <tr>
         <th>Name </th>
         <th>Owner</th>
         <th>Breed</th>
        </tr>
      {this.state.dogs.map((dog) => {
        return <Dog dog={dog} />;
      })}
        </table>
    </div>
  );
  }
}

