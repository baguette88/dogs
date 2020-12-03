import React, { Component } from 'react'

export default class Dog extends Component {
    render() {
        return (
            <div>
             
                  <td>{this.props.dog.name} </td>
                  <td> {this.props.dog.owner} </td>
                  <td> {this.props.dog.breed} </td>
              
            </div>
        )
    }
}
