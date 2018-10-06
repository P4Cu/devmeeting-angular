import { OnInit, Component } from '@angular/core';
import { Product } from './models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  readonly productList: Product[] = [
    { name: "aa", price: 10, promoted: false, tags: ["tani", "brzydki"] },
    { name: "bb", price: 100, promoted: true },
    { name: "AA", price: 100, promoted: true },
    { name: "BB", price: 100, promoted: true },
    { name: "aAbbAC", price: 10.0, promoted: false, tags: ["brzydki"] },
  ]

  filteredProductList: Product[] = []

  ngOnInit() {
    this.filteredProductList = this.productList
  }

  onFilterUpdate(filter) {
    console.log('onFilterUpdate', filter)
    this.filteredProductList = filter.processData(this.productList)
  }
}
