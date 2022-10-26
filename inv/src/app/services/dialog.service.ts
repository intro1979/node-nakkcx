import { Injectable } from '@angular/core';
import { ConfirmDialogComponent } from '../comps/confirm-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  confirmDialog(msg: string): MatDialogRef<any> {
    return this.dialog.open(ConfirmDialogComponent, {
      height: '',
      width: '300px',
      data: {
        message: msg
      }
    });
  }
}
