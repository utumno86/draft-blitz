import { Component, inject, Input } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { Player } from '../../../shared/players.response';
import { ButtonCellRendererComponent } from '../../../shared/cell-renderers/button-cell-renderer/button-cell-renderer.component';
import { RosterService } from '../../../shared/roster.service';

@Component({
  selector: 'app-players-list-grid',
  standalone: true,
  imports: [AgGridAngular], // Add Angular Data Grid Component
  templateUrl: './players-list-grid.component.html',
  styleUrl: './players-list-grid.component.scss',
})
export class PlayersListGridComponent {
  @Input() players: Player[] = [];

  rosterService = inject(RosterService);

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
    {
      field: 'button',
      cellRenderer: ButtonCellRendererComponent,
      cellRendererParams: {
        buttonClicked: (params: Player) => {
          this.handleRowAction(params);
        },
      },
    },
  ];

  defaultColDef: ColDef = {
    filter: true,
    floatingFilter: true,
  };

  handleRowAction(params: Player) {
    if (params) {
      this.rosterService.addPlayer(params);
    }
    console.log(this.rosterService.selectedPlayers());
  }
}
