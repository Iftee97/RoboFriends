// this file contains the same code as App.js (class components), except done in hooks 

import { useState, useEffect } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from "../components/SearchBox";


function App() {

  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => setRobots(users));
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  }

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase())
  });

  if (robots.length === 0) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
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

export default App;
