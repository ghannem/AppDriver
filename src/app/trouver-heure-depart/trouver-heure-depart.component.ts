import { Component, OnInit } from '@angular/core';
import { TrouverHeureDepartService } from './trouver-heure-depart.service'
import { Trip } from '../common/trip'

@Component({
  selector: 'app-trouver-heure-depart',
  templateUrl: './trouver-heure-depart.component.html',
  styleUrls: ['./trouver-heure-depart.component.scss']
})
export class TrouverHeureDepartComponent implements OnInit {

  trips: Trip[];

  constructor(private trouverHeureDepartService: TrouverHeureDepartService) { }

  ngOnInit() {
    this.getItineraires();
  }

  getItineraires(): void  {
    this.trouverHeureDepartService.getTimeTable()
      .subscribe(trips => {
        this.trips = trips;
      });
  }

}
