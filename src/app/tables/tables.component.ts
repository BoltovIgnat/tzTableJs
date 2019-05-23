import { Component, OnInit, Input } from '@angular/core';
import { TableActionService } from '../tableAction.service';
@Component({
  selector: 'div.table',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  currenciesItems;
    
  constructor(private tableActionService: TableActionService) {
      this.currenciesItems = [];
  }
  
  ngOnInit() {
      let self = this;
      setInterval(()=>{self.currenciesItems = self.tableActionService.getItems()},10);
  }
  
  delete(item) {
      this.tableActionService.deleteCurrenciesItem(item);
      this.currenciesItems = this.tableActionService.getItems();
  }
    
  edit(item) {
      this.tableActionService.editCurrenciesItem(item);
      this.currenciesItems = this.tableActionService.getItems();        
  }
    
  sort(e) {
    let target = e.target;
    target.classList.toggle('currencies__th--sort--active');
    if (target.dataset.sort === 'date' && target.classList.contains('currencies__th--sort--active')) {
        this.tableActionService.tdSortPrice(function(a, b) {return a.time - b.time});
        return
    }
    
    if (target.dataset.sort === 'price' && target.classList.contains('currencies__th--sort--active')){
        this.tableActionService.tdSortPrice(function(a, b) {return a.price - b.price});
        return
    }
    
    if (target.dataset.sort === 'date' && !target.classList.contains('currencies__th--sort--active')) {
        this.tableActionService.tdSortPrice(function(a, b) {return b.time - a.time});
        return
    }
    
    if (target.dataset.sort === 'price' && !target.classList.contains('currencies__th--sort--active')){
        this.tableActionService.tdSortPrice(function(a, b) {return b.price - a.price});
        return
    }
  }
}
