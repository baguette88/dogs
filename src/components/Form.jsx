import React, { Component } from "react";


export default class Form extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value,
        });
    }
    


    handleSubmit(event) {
        event.preventDefault();
    fetch("http://localhost:8000/api/v1/dogs/", {
      method: "POST",
      body: JSON.stringify({
        name: this.props.user_id,
        user_name: this.props.user_name,
        itemsInOrder: this.props.itemsInCart_id,
        delivery: this.props.delivery,
        restaurant_name: this.props.restaurant_name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
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
  render() {
    return (
      <form>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            id="name"
                    onChange={this.handleChange()}
                    value={this.state.name}
          />
        </label>
        <label htmlFor="owner">
          Owner:
          <input type="text" name="owner" id="owner" />
        </label>
        <label htmlFor="breed">
          Breed:
          <input type="text" name="breed" id="breed" />
        </label>
        <input type="submit" value="Add dog!" onClick={this.handleClick} />
      </form>
    );
  }
}