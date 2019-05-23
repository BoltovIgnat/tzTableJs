import { Component, OnInit } from '@angular/core';
import { TableActionService } from '../tableAction.service';

@Component({
  selector: 'label.numberSort',
  templateUrl: './field-price.component.html',
  styleUrls: ['./field-price.component.scss']
})
export class FieldPriceComponent implements OnInit {

  constructor(private tableActionService: TableActionService) { }

  ngOnInit() {
  }
  
  changeField() {
      this.tableActionService.actionFieldSort(this.minNumber);
      
  }
}
