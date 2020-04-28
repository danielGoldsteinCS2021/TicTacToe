import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTacBoardComponent } from './tic-tac-board.component';

describe('TicTacBoardComponent', () => {
  let component: TicTacBoardComponent;
  let fixture: ComponentFixture<TicTacBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicTacBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicTacBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
