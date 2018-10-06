import { OnInit, Component, Inject } from '@angular/core';
import { Product } from './models'
import { ProductRepositoryService, ProductRepositoryToken } from './product-repository.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor( @Inject(ProductRepositoryToken) private productRepository : ProductRepositoryService) {
  }

  filteredProductList: Product[] = []

  ngOnInit() {
    this.filteredProductList = this.productRepository.products()
  }

  onFilterUpdate(filter) {
    console.log('onFilterUpdate', filter)
    this.filteredProductList = filter.processData(this.productRepository.products())
  }
}
