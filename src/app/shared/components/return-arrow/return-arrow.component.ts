import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-return-arrow',
  templateUrl: './return-arrow.component.html',
  styleUrls: ['./return-arrow.component.scss'],
})
export class ReturnArrowComponent {
  constructor(private _location: Location) {}

  prevPage() {
    this._location.back();
  }
}
