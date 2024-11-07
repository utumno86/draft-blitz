import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { players, PlayersResponse } from './players.response';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  constructor() {}

  getAllPlayers(): Observable<PlayersResponse> {
    return of(players);
  }
}
