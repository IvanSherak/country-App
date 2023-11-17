import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'capital-table',
  templateUrl: './capital-table.component.html',
  styles: [
    `img {
      width: 25px;
    }`
  ]
})
export class CapitalTableComponent {
  @Input()
  public capital: Country[]= [];

}
