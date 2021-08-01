import { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from "../components/SearchBox";


class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    });

    if (robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filteredRobots} />
        </div>
      );
    }

    // return robots.length === 0 ? <h1>Loading</h1> : (
    //   <div className="tc">
    //     <h1>RoboFriends</h1>
    //     <SearchBox searchChange={this.onSearchChange} />
    //     <CardList robots={filteredRobots} />
    //   </div>
    // );

  }
}

export default App;
