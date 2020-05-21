import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {
  render() {
    function formatName(user) {
      return user.firstName + ' ' + user.lastName
    }

    const user = {
      firstName: "Sue",
      lastName: "Rocha"
    };

    const helloWorld = "Howdy Cowgirl! Welcome to the Road to learn React"

    return (
      <div className="App">
        <h2>{helloWorld} {user.firstName}</h2>
        <h2>{helloWorld} {formatName(user)}</h2>
        <ul>
          {list.map(item =>
            <div key={item.objectID}>
              <li><a href={item.url}>{item.title}</a></li>
              <li>{item.num_comments}</li>
              <li>{item.points}</li>
              <li>{item.author}</li>
            </div>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
