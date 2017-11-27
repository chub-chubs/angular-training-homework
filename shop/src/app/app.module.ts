import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductDetailsListComponent } from './product-details-list/product-details-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductRepositoryService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsListComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProductRepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
