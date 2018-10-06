import { Component, OnInit } from '@angular/core';
import { Product } from '../models'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList : Product[] = [
    { name: "aa", price: 10, promoted: false},
    { name: "bb", price:100, promoted: true}
  ]

  constructor() { }

  ngOnInit() {
  }

  promotedItems(){
    return this.productList.filter( item => item.promoted );
  }

  normalItems(){
    return this.productList.filter( item => !item.promoted );
  }
}
