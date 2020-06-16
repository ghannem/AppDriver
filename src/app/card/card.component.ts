import { Component, OnInit, Input } from '@angular/core';
import { Bus } from '../common/bus';
import { Line } from '../common/line';
import { Itinerary } from '../common/itinerary';
import { Trip } from '../common/trip';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() bus: Bus;
  @Input() line: Line;
  @Input() itinerary: Itinerary;
  @Input() trip: Trip;

  constructor() { }

  ngOnInit() {
  }

}
