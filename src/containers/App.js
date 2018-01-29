import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css'

class App extends Component {
  render() {
    let {allSeasons} = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>load seasons</h2>
        <button onClick={() => this.props.loadSeasons({},'seasons')} > Load Seasons </button>
        <h5>
          <small>
            {
              allSeasons && allSeasons.list && allSeasons.list.length && allSeasons.list.map(s => <div key={s.id}><p>ID: {s.leagueId}</p></div>)
            }
          </small>
        </h5>
      </div>
    );
  }
}

export default App;
