import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string = 'OK') {
    this._snackBar.open(message, action),
      {
        duration: 1000,
        verticalPosition: this.verticalPosition,
      };
  }
}
