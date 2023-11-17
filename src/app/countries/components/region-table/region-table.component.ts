import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'region-table',
  templateUrl: './region-table.component.html',
  styles: [
    `img {
      width: 25px;
    }`
  ]
})
export class RegionTableComponent {

  @Input()
  public region : Country[] = [];


}
