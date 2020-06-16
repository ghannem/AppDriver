import { Component, OnInit } from '@angular/core';
import { TrouverBusService } from './trouver-bus.service'
import { Bus } from '../common/bus'

@Component({
  selector: 'app-trouver-bus',
  templateUrl: './trouver-bus.component.html',
  styleUrls: ['./trouver-bus.component.scss']
})
export class TrouverBusComponent implements OnInit {

  buses: Bus[];
  config: any;

  constructor(private trouverBusService: TrouverBusService) { 
    this.config = {
      itemsPerPage: 12,
      currentPage: 1
    };
  }

  ngOnInit() {
    this.getBuses();
  }

  getBuses(): void  {
    this.trouverBusService.getBuses()
      .subscribe(buses => {
        this.buses = buses;
      });
  }

  pageChanged(event: any){
    this.config.currentPage = event;
  }

}
