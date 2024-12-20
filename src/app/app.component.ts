import '@shoelace-style/shoelace/dist/components/button/button.js';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  WritableSignal,
} from '@angular/core';
import { PlayersListComponent } from './players/players-list/players-list.component';
import { SelectedPlayersComponent } from './players/players-list/selected-players/selected-players.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayersListComponent, SelectedPlayersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  showDrawer: WritableSignal<boolean> = signal(false);

  showSelectedPlayersList() {
    this.showDrawer.set(true);
  }

  closeSelectedPlayersList() {
    this.showDrawer.set(false);
  }
}
