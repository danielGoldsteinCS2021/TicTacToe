import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-board',
  templateUrl: './tic-tac-board.component.html',
  styleUrls: ['./tic-tac-board.component.scss']
})

export class TicTacBoardComponent implements OnInit {
  isXNext: boolean;
  winner: string;
  boxes: string[];
  constructor() { }

  ngOnInit(): void {
    this.createGame();
  }

  createGame(){
    this.boxes = Array(9).fill(null);
    this.winner = null;
    this.isXNext = Math.floor(Math.random() * 2) ? true : false; // should chose random who starts
  }

  get player(){ // get request for attribute
    return this.isXNext ? 'X' : 'O';
  }

  markBox(idx: number){
    // if box has not been clicked, and there is no winner
    if (!this.boxes[idx] && !this.winner){
      this.boxes.splice(idx, 1, this.player); // replace 1 item at idx with player
      this.isXNext = !this.isXNext;
    }
    this.winner = this.findWinner();
  }

  findWinner(){
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    const leng: number = winningLines.length;
    for (let i = 0; i < leng; ++i){
      const currentLine: Array<number> = winningLines[i];
      if (this.boxes[currentLine[0]] === this.boxes[currentLine[1]]
        && this.boxes[currentLine[0]] === this.boxes[currentLine[2]]){
        return this.boxes[currentLine[0]];
      }
    }
    return null;
  }
}
