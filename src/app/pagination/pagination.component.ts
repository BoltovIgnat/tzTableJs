import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { TableActionService } from '../tableAction.service';

@Component({
  selector: 'div.pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  pages;
  @Output() nextPage = new EventEmitter();
  @Output() prevPage = new EventEmitter();
  constructor(private tableActionService: TableActionService) {
    this.pages = {};
  }

  ngOnInit() {
      setInterval(()=>{this.pages = this.tableActionService.getPage()},10);
  }

  onNextPage() {
      this.tableActionService.nextPage();
      this.pages = this.tableActionService.getPage();
  }
  
  onPrevPage() {
      this.tableActionService.prevPage();
      this.pages = this.tableActionService.getPage();
  }
}
