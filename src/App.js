import React, { Component } from 'react';
import { CardList } from "./component/card-list/card-list.component";
import { SearchBox } from "./component/search-box/search-box.component";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters : [],
      searchText: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}));
  }

  handleChange = (e) => {
      this.setState({ searchText: e.target.value });
  }
  
  render() {
    const { monsters, searchText } = this.state;
    const filteredMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchText.toLocaleLowerCase())
    )
    return ( 
        <div className="App">
          <h1>Monsters Rolodex</h1>
          <SearchBox 
              placeholder = "Search Monsters" 
              handleChange = { this.handleChange}
          />
          <CardList monsters = {filteredMonsters}></CardList> 
        </div>
      );
  }
  
}

export default App;
