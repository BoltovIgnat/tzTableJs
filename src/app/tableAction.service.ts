import { Injectable } from '@angular/core';
import { currenciesItems } from './shared/data';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class TableActionService {
  private apiUrl = 'https://api.cryptonator.com/api/ticker/btc-usd';
  private currenciesItems = currenciesItems;
  private maxEntry = 5
  private page = 1;
  private maxPage;
  private tickerLast = {};
  private newTicker = {};
  private minNumber;
    
  constructor(private http: HttpClient) {
  }    
    
  getItems() {
      let price1 = this.tickerLast.price;
      let price2 = this.newTicker.price;
      
      if (price1 !== price2) {
          let nowDate = new Date();
          
          this.newTicker.date = moment().format('YYYY-MM-DD kk:mm');
          this.newTicker.time = +nowDate;
          currenciesItems.unshift(this.newTicker);
          this.tickerLast = this.newTicker;
      }
      this.http.get(this.apiUrl).subscribe(data => {this.newTicker = data["ticker"]});
      let arr = this.currenciesItems.slice((this.page - 1) * this.maxEntry,this.page * this.maxEntry);
      return arr;
      
  }
    
  getPage() {
      this.maxPage = Math.ceil(this.currenciesItems.length / this.maxEntry);
      let page = this.page;
      let maxPage = this.maxPage;
      return {
          page: page,
          maxPage: maxPage
      }
  }
    
  createCurrenciesItem(item) {
      
  }
    
  deleteCurrenciesItem(item) {
      let index = this.currenciesItems.indexOf(item);
      
      if (index > -1) {
          this.currenciesItems.splice(index, 1);
      }
  }
  
  editCurrenciesItem(item) {
      item.time = moment(item.date, 'YYYY-MM-DD kk:mm').valueOf();
  }
    
  nextPage() {
      if (this.page < this.maxPage) this.page++;
  }
  
  prevPage() {
      if (this.page > 1) this.page--;
  }
    
    
  tdSortPrice(callback) {
      currenciesItems.sort(callback);
      console.log(currenciesItems);
  }
    
  actionFieldSort(minNumber) {
      let isValid = currenciesItems.some(function(item) {
          if (item.price > minNumber) return true;
          return false;
      })
      const audio = new Audio(); // Создаём новый элемент Audio
      audio.src = 'https://bitcoinvolatility.io/wp-content/plugins/btc-alert/sound.mp3'; // Указываем путь к звуку "клика"
      audio.autoplay = isValid; // Автоматически запускаем
  }
}
