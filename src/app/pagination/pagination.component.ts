import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  config: any;
  @Input() itemsCount: number;

  constructor() { 
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.itemsCount
    };
  }

  ngOnInit() {
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

}
