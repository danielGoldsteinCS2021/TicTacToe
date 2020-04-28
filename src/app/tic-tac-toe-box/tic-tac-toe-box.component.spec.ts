import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTacToeBoxComponent } from './tic-tac-toe-box.component';

describe('TicTacToeBoxComponent', () => {
  let component: TicTacToeBoxComponent;
  let fixture: ComponentFixture<TicTacToeBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicTacToeBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicTacToeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
