import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersListGridComponent } from './players-list-grid.component';

describe('PlayersListGridComponent', () => {
  let component: PlayersListGridComponent;
  let fixture: ComponentFixture<PlayersListGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersListGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersListGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
