import { Injectable, signal, WritableSignal } from '@angular/core';
import { Player } from './players.response';

@Injectable({
  providedIn: 'root',
})
export class RosterService {
  private _selectedPlayers: WritableSignal<Player[]> = signal([]);
  public selectedPlayers = this._selectedPlayers.asReadonly();

  addPlayer(player: Player) {
    this._selectedPlayers.update((players) => [...players, player]);
  }

  removePlayer(player: Player) {
    this._selectedPlayers.update((players) =>
      players.filter((p) => p !== player)
    );
  }

  clearRoster() {
    this._selectedPlayers.update(() => []);
  }
}
