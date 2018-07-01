import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    users: [],
    tasks: []
          }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
    fetch('/tasks')
      .then(res => res.json())
      .then(tasks => this.setState({ tasks }));
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div>
            <div key={user.id}>{user.sureName + " " + user.lastName }</div>
            <div></div>
            <br></br>
          </div>
        )}
        <h1>Neuer Arbeiter</h1>
          <form action="/users" method="POST">
            <input type="text" placeholder="Vorname" name="sureName"></input>
            <input type="text" placeholder="Nachname" name="lastName"></input>
            <button type="submit">Submit</button>
          </form>
        <h1>Aufgaben</h1>
        {this.state.tasks.map(task =>
          <div>
            <div key={task.id}>{task.taskTitle + " " + task.taskDescription + " " + task.taskImage}</div>
          </div>
        )}
        <h1>Neue Aufgabe</h1>
            <form action="/tasks" method="POST">
              <input type="text" placeholder="Aufgaben Name" name="taskTitle"></input>
              <input type="text" placeholder="Exacte Beschreibung der Aufgabe" name="taskDescription"></input>
              <input type="file" placeholder="Bild für die Aufgabe" name="taskImage"></input>
              <button type="submit">Submit</button>
            </form>
      </div>
    );
  }
}

export default App;
