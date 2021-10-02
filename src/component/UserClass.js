import React, { Component } from "react";



class UsersClass extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  async getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((usersData) => {
        this.setState({ users: usersData });
      });
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <div>
        {this.state.users.map((user) => {
          return (
            <div>
              <h4>Name: {user.name}</h4>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
              <hr/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default UsersClass;