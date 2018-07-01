import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div>
            <div key={user.id}>{user.sureName}</div>
            <div> {user.lastName} </div>
            <br></br>
          </div>
        )}
        <h1>Neuer Arbeiter</h1>
          <form action="/users" method="POST">
            <input type="text" placeholder="Vorname" name="sureName"></input>
            <input type="text" placeholder="Nachname" name="lastName"></input>
            <button type="submit">Submit</button>
          </form>
      </div>
    );
  }
}

export default App;
