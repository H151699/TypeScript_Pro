import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



type ONGOING_GAME = -1
const ONGOING_GAME = -1


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
 board:Player[],
 nextPlayerTurn: Player,
 gameIsWon: Player | ONGOING_GAME 

 
}


/*
  App class
*/
class App extends Component<{}, Istate> {

  /* Initital state */
  public state = {
    
    board: [Player.None, Player.None, Player.None, Player.None, 
      Player.None, Player.None, Player.None, Player.None, Player.None,], // Player.None :  initial start, no player
      
      gameIsWon: ONGOING_GAME,
      nextPlayerTurn: Player.One
     
    }
    
    /** the Rule */
    public checkIfGameIsOver = (board: Player[]) => {

      if(board[0] === board[1]  && board[1] === board[2] && board [2] !== Player.None){ 
        return board[0]

      } else if(board[3] === board[4]  && board[4] === board[5] && board [5] !== Player.None){ 
        return board[3]

      } else if(board[6] === board[7]  && board[7] === board[8] && board [8] !== Player.None){
        return board[6]
      }



      else if(board[1] === board[4]  && board[4] === board[7] && board [7] !== Player.None){
        return board[1]
      }
      else if(board[2] === board[5]  && board[5] === board[8] && board [8] !== Player.None){
        return board[2]
      }
      else if(board[0] === board[4]  && board[4] === board[8] && board [8] !== Player.None){
        return board[0]
      }
      else if(board[2] === board[4]  && board[4] === board[6] && board [6] !== Player.None){
        return board[2]
      }


      for(const player of board){
        if(player === Player.None){
          return ONGOING_GAME
        }
      }
      return Player.None

      }






    /* createOnclickHandler
    the func takes index then
    Return a new funciton
     */
    public createOnclickHandler = (index: number) => () => {

      const {board, nextPlayerTurn, gameIsWon} = this.state


      /** disable move when one is won  */
      if(gameIsWon !== ONGOING_GAME || board[index] !== Player.None){
        return
      }

       // disable overwrite other player
       if(board[index] !== Player.None){
        return
      }


      const newBoard = board.slice()
      newBoard[index] = nextPlayerTurn
      const newgameIsWon = this.checkIfGameIsOver(newBoard)

      this.setState({board: newBoard, nextPlayerTurn: 3 - nextPlayerTurn, gameIsWon: newgameIsWon});


     }


  /* render Cell */
 public renderCell = (index: number )=> {
  const {board} = this.state

  return <div className = "cell" onClick = {this.createOnclickHandler(index)} data-player = {board[index]}/>
 } 


   /* render status */
  public renderStatus = () => {


    const {gameIsWon} =  this.state
    const winningText = gameIsWon !== Player.None ? `Player ${gameIsWon} won` : 'The game is a draw '



    return <div>
      {'player 1 is blue'} <br/>
      {'player 2 is yellow'} <br/>
      {gameIsWon === ONGOING_GAME ? 'game is ongoing' : winningText}
      

    </div>
  }







  /* render Board */
 public renderBoard = () => {

   const {board} = this.state

   // initial start, no player
   /* Board container*/
   return <div className ="board-container">  
            {board.map((value, key) => this.renderCell(key))} 
          </div>
 }






 

 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Tic Tac Toe using React TypeScript</h1>
    
       
        </header>

        {this.renderBoard()}
        {this.renderStatus()}
      
      </div>
    );
  }
}

export default App;
