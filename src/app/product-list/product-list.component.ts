import { Component, OnInit, Input } from '@angular/core';
import { ProductComponent } from '../product/product.component'
import { Product } from '../models'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() productList: Product[]

  constructor() { }

  ngOnInit() {
  }

  promotedItems() {
    return this.productList.filter(item => item.promoted);
  }

  normalItems() {
    return this.productList.filter(item => !item.promoted);
  }

}
