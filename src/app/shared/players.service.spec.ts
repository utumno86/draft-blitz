import { TestBed } from '@angular/core/testing';

import { PlayersService } from './players.service';

describe('PlayersService', () => {
  let service: PlayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAllPlayers', () => {
    it('returns a list of players', (done: DoneFn) => {
      service.getAllPlayers().subscribe((playerData) => {
        expect(playerData.players[0]).toEqual(
          jasmine.objectContaining({
            player_id: 4876,
            name: 'Justin Jefferson',
            position: 'WR',
            team: 'MIN',
            adp: 1.4,
            adp_formatted: '1.01',
            times_drafted: 603,
            high: 1,
            low: 8,
            stdev: 0.7,
            bye: 6,
          })
        );
        done();
      });
    });
  });
});
