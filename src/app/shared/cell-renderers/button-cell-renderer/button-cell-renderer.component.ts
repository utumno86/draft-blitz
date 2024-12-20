import { Component, inject } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { RosterService } from '../../roster.service';
import { Player } from '../../players.response';

export interface ButtonCellRendererParams extends ICellRendererParams<Player> {
  buttonClicked: (value: unknown) => void;
}

@Component({
  selector: 'app-button-cell-renderer',
  standalone: true,
  imports: [],
  templateUrl: './button-cell-renderer.component.html',
  styleUrl: './button-cell-renderer.component.scss',
})
export class ButtonCellRendererComponent implements ICellRendererAngularComp {
  params!: ButtonCellRendererParams;
  agInit(params: ButtonCellRendererParams): void {
    this.params = params;
  }
  refresh(params: ButtonCellRendererParams) {
    this.params = params;
    return true;
  }
}
