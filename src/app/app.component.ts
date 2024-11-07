import { Component } from '@angular/core';
import { PlayersListComponent } from './players/players-list/players-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
