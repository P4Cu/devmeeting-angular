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

  filteredProductList: Product[] = [
  ]

  ngOnInit() {
    this.filteredProductList = this.productList
  }

  onNewFilter(data) {
    console.log(data)
    this.filteredProductList = this.productList.filter(element => element.name.toLowerCase().match(data.toLowerCase()))
  }
}
