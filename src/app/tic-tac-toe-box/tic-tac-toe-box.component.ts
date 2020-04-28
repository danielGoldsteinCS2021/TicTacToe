import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe-box',
  templateUrl: './tic-tac-toe-box.component.html',
  styleUrls: ['./tic-tac-toe-box.component.scss']
})
export class TicTacToeBoxComponent{
  @Input() valueOfBox: 'X' | 'O';
}
