import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms'
import { Product } from '../models';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  public myInput = new FormControl();
  @Output() public newFilterData = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.myInput.valueChanges.subscribe( value => this.newFilterData.emit( this ))
  }

  public matches(data : Product) {
    const filter = this.myInput.value
    if (data.name.toLowerCase().match(filter))
      return true;

    if ( data.tags && data.tags.some( tag => tag.match(filter)!==null ) )
      return true;

    return false;
  }

}
