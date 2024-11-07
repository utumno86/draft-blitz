import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersListComponent } from './players-list.component';
import { PlayersService } from '../../shared/players.service';
import { of } from 'rxjs';

describe('PlayersListComponent', () => {
  let component: PlayersListComponent;
  let fixture: ComponentFixture<PlayersListComponent>;
  let playersServiceSpy: jasmine.SpyObj<PlayersService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('PlayersService', ['getAllPlayers']);
    await TestBed.configureTestingModule({
      imports: [PlayersListComponent],
      providers: [{ provide: PlayersService, useValue: spy }],
    }).compileComponents();

    playersServiceSpy = TestBed.inject(
      PlayersService
    ) as jasmine.SpyObj<PlayersService>;
    fixture = TestBed.createComponent(PlayersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when players service returns results', () => {
    it('renders the component', () => {
      const stubPlayers = {
        status: 'Success',
        meta: {
          type: 'Half-PPR',
          teams: 12,
          rounds: 15,
          total_drafts: 4576,
          start_date: '2023-08-28',
          end_date: '2023-09-01',
        },
        players: [],
      };
      playersServiceSpy.getAllPlayers.and.returnValue(of(stubPlayers));
      setTimeout(() => {});
      fixture.detectChanges();
      console.log(fixture.nativeElement);
      const gridComponent = fixture.nativeElement.querySelector(
        'app-players-list-grid'
      );

      expect(gridComponent).toBeTruthy();
    });
  });
});
