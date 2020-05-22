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

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: "",
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onDismiss(id) {
    const isNotID = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotID);
    this.setState({ list: updatedList });
  }

  render() {
    function formatName(user) {
      return user.firstName + ' ' + user.lastName
    }

    const user = {
      firstName: "Sue",
      lastName: "Rocha"
    };

    const helloWorld = "Howdy Cowgirl! Welcome to the Road to learn React"

    const { searchTerm, list } = this.state;

    return (
      <div className="App">
        <h2>{helloWorld} {user.firstName}</h2>
        <h2>{helloWorld} {formatName(user)}</h2>
        <ul>
          <form>
            <input
              type="text"
              onChange={this.onSearchChange}
            />
          </form>
          {list.filter(isSearched(searchTerm)).map(item =>
            <div key={item.objectID}>
              <li><a href={item.url}>{item.title}</a></li>
              <li>{item.num_comments}</li>
              <li>{item.points}</li>
              <li>{item.author}</li>
              <li><button
                onClick={() => this.onDismiss(item.objectID)}
                type="button"
              >
                Dismiss
                </button>
              </li>
            </div>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
