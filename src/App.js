import React, {Component} from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchTabStyles from "./SearchTab.module.css"


class App extends Component{

    state = {
      value : ""
    }

  inputValue = (e) => {
    var valueInput = e.target.value;
    this.setState({
      value : valueInput
    })
  }

  render(){
    return(
      <div>
      <input id={SearchTabStyles.searchInput} onChange={this.inputValue} type="text" placeholder="Search for Movie Title..." />
      <MovieCard passValues={this.state.value} />
    </div>
    )
  }
}




export default App;
