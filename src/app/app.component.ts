import { Component } from '@angular/core';
import { Product } from './models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  productList: Product[] = [
    { name: "aa", price: 10, promoted: false, tags: ["tani", "brzydki"] },
    { name: "bb", price: 100, promoted: true }
  ]
  title = 'devmeetings-angular';
}
