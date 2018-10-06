import { Component, OnInit } from '@angular/core';
import { Product } from '../models'

let productList : Product[] = [
  { name: "aa", promoted: false},
  { name: "bb", promoted: true}
]

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
