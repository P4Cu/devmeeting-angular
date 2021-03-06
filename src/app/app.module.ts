import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PromotedProductComponent } from './promoted-product/promoted-product.component';
import { FilterComponent } from './filter/filter.component';
import { ProductRepositoryToken, ProductRepositoryService } from './product-repository.service'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    PromotedProductComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [{provide: ProductRepositoryToken, useClass: ProductRepositoryService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
