import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { RosterService } from '../../../shared/roster.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-selected-players',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selected-players.component.html',
  styleUrl: './selected-players.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SelectedPlayersComponent {
  @Input() showDrawer: boolean = false;
  @Output() closeSelectedPlayersEvent = new EventEmitter<void>();

  rosterService = inject(RosterService);

  closeSelectedPlayers(event: Event) {
    event.preventDefault();
    this.closeSelectedPlayersEvent.emit();
  }

  selectedPlayers = this.rosterService.selectedPlayers;
}
