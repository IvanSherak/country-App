import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public region: Country[] = [];

  constructor (private countriesService: CountriesService){}


  searchByRegion( region: string){

    this.countriesService.searchRegion(region)
      .subscribe(region =>{
        this.region = region;

      })
  }

}
