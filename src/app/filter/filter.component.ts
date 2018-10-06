import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms'
import { Product } from '../models';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  private myInput = new FormControl();

  // filter have been updated. Provide data to update it.
  // \param this
  @Output() public update = new EventEmitter();

  private sortByPrice?: boolean = null;

  constructor() { }

  ngOnInit() {
    this.myInput.valueChanges.subscribe(value => this.update.emit(this))
  }

  public onSortByPrice() {
    console.log('sortByPrice')
    this.update.emit(this)
  }

  public processData(products: Product[]) {
    return products.filter(product => this.matches(product))
  }

  private matches(data: Product) {
    const filter: string = this.myInput.value
    if (filter === null)
      return true;

    if (data.name.toLowerCase().match(filter))
      return true;

    if (data.tags && data.tags.some(tag => tag.match(filter) !== null))
      return true;

    return false;
  }

}
