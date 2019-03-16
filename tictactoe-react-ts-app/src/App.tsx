import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
Player
*/
 enum Player{
  None = 0,
  One = 1, 
  Two = 2
}

/*
Interface State
*/
interface Istate{
 board:Player[]
}


/*
  App class
*/
class App extends Component<{}, Istate> {

  /* Initital state */
  public state = {
    board: [Player.None, Player.None, Player.None, Player.None, 
      Player.None, Player.None, Player.None, Player.None, Player.None,] // Player.None :  initial start, no player
    }

     

  /* render Cell */
 public renderCell = (index: number )=> {
  return <div className = "cell"/>
 } 

  /* render Board */
 public renderBoard = () => {

   const {board} = this.state

   // initial start, no player
   return <div className ="board-container">  
            {board.map((value, key) => this.renderCell(key))} 
          </div>
 }

 /* Board container*/

 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Tic Tac Toe using React TypeScript</h1>
    
       
        </header>

        {this.renderBoard()}
      
      </div>
    );
  }
}

export default App;
