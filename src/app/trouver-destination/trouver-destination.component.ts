import { Component, OnInit } from '@angular/core';
import { TrouverDestinationService } from './trouver-destination.service'
import { Itinerary } from '../common/itinerary';

@Component({
  selector: 'app-trouver-destination',
  templateUrl: './trouver-destination.component.html',
  styleUrls: ['./trouver-destination.component.scss']
})
export class TrouverDestinationComponent implements OnInit {

  itineraries: Itinerary[];

  constructor(private trouverDestinationService: TrouverDestinationService) {
  }

  ngOnInit() {
    this.getItineraires();
  }

  getItineraires(): void  {
    this.trouverDestinationService.getItineraries()
      .subscribe(itineraires => {
        this.itineraries = itineraires;
      });
  }

}
