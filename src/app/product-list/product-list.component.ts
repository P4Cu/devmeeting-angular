import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component'
import { Product } from '../models'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [
    { name: "aa", price: 10, promoted: false },
    { name: "bb", price: 100, promoted: true }
  ]

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
