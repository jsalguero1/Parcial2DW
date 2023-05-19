import { Component, OnInit } from '@angular/core';
import { Banda } from '../banda.model';
import { BandasService } from '../bandas.service';

@Component({
  selector: 'app-bandas-list',
  templateUrl: './bandas-list.component.html',
  styleUrls: ['./bandas-list.component.css']
})
export class BandasListComponent implements OnInit {

  bandas: Array<Banda> = [];
  selected: boolean = false;
  selectedBanda!: Banda;

  constructor(private bandasService:BandasService) { }

  getBandas(): void
  {
    this.bandasService.getBandas().subscribe((bandas) => {
      this.bandas = bandas;
    });
  }

  getOlderBand():Banda{
    let anio:number = this.bandas[0].foundation_year;
    let bandaOlder:Banda = this.bandas[0];
    
    for (let i = 0; i < this.bandas.length; i++) 
    {
      if (this.bandas[i].foundation_year < anio){
        anio = this.bandas[i].foundation_year;
        bandaOlder = this.bandas[i];
      }
    }
    return bandaOlder;
  }

  onSelect(banda: Banda): void 
  {
    this.selected = true;
    this.selectedBanda = banda;
  }


  ngOnInit() {
    this.getBandas();
  }

}
