import { Component, OnInit } from '@angular/core';
import { TrouverLigneService } from './trouver-ligne.service';
import { Line } from '../common/line';

@Component({
  selector: 'app-trouver-ligne',
  templateUrl: './trouver-ligne.component.html',
  styleUrls: ['./trouver-ligne.component.scss']
})
export class TrouverLigneComponent implements OnInit {

  lines: Line[];
  config: any;

  constructor(private trouverLigneService: TrouverLigneService) {
    this.config = {
      itemsPerPage: 12,
      currentPage: 1
    };
  }

  ngOnInit() {
    this.getLines();
  }

  getLines(): void  {
    this.trouverLigneService.getLines()
      .subscribe(lines => {
        this.lines = lines;
      });
  }

  pageChanged(event: any){
    this.config.currentPage = event;
  }
  
}
