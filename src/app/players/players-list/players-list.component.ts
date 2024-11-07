import { Component, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersService } from '../../shared/players.service';
import { Player } from '../../shared/players.response';
import { PlayersListGridComponent } from './players-list-grid/players-list-grid.component';

@Component({
  selector: 'app-players-list',
  standalone: true,
  imports: [PlayersListGridComponent, CommonModule],
  templateUrl: './players-list.component.html',
  styleUrl: './players-list.component.scss',
})
export class PlayersListComponent {
  playersService = inject(PlayersService);

  playersData$ = this.playersService.getAllPlayers();
}
