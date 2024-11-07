import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Player } from '../../players.response';

@Component({
  selector: 'app-button-cell-renderer',
  standalone: true,
  imports: [],
  templateUrl: './button-cell-renderer.component.html',
  styleUrl: './button-cell-renderer.component.scss',
})
export class ButtonCellRendererComponent implements ICellRendererAngularComp {
  agInit(params: ICellRendererParams<Player>): void {}
  refresh(params: ICellRendererParams<Player>) {
    params.data?.position;
    return true;
  }
  buttonClicked() {
    alert('Drafted!');
  }
}
