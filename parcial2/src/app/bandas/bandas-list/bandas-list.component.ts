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

  constructor(private bandasService:BandasService) { }

  getBandas(): void
  {
    this.bandasService.getBandas().subscribe((bandas) => {
      this.bandas = bandas;
    });
  }

  ngOnInit() {
    this.getBandas();
  }

}
