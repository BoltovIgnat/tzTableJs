import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablesComponent } from './tables/tables.component';
import { PaginationComponent } from './pagination/pagination.component';
import { TablesItemComponent } from './tables-item/tables-item.component';
import { FieldPriceComponent } from './field-price/field-price.component';
import { TableActionService } from './tableAction.service';


@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    PaginationComponent,
    TablesItemComponent,
    FieldPriceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TableActionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
