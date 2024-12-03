import { Component, Input } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { Player } from '../../../shared/players.response';
import { ButtonCellRendererComponent } from '../../../shared/cell-renderers/button-cell-renderer/button-cell-renderer.component';

@Component({
  selector: 'app-players-list-grid',
  standalone: true,
  imports: [AgGridAngular], // Add Angular Data Grid Component
  templateUrl: './players-list-grid.component.html',
  styleUrl: './players-list-grid.component.scss',
})
export class PlayersListGridComponent {
  @Input() players: Player[] = [];
  @Input() selectedPlayers: any;

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: 'name' },
    { field: 'position' },
    { field: 'team' },
    { field: 'adp' },
    { field: 'adp_formatted', headerName: 'ADP Formatted' },
    { field: 'times_drafted', headerName: 'Times Drafted' },
    { field: 'high' },
    { field: 'low' },
    { field: 'stdev' },
    { field: 'bye' },
    { field: 'button', cellRenderer: ButtonCellRendererComponent },
  ];

  defaultColDef: ColDef = {
    filter: true,
    floatingFilter: true,
  };

  cellRendererParams = {
    selectedPlayers: this.selectedPlayers,
  };
}
