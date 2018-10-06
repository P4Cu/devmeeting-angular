import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models'

@Component({
  selector: 'app-promoted-product',
  templateUrl: './promoted-product.component.html',
  styleUrls: ['./promoted-product.component.css']
})
export class PromotedProductComponent implements OnInit {

  @Input() element : Product;

  constructor() { }

  ngOnInit() {
  }

}
