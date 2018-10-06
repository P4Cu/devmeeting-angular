import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms'

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
    this.myInput.valueChanges.subscribe( value => this.newFilterData.emit( value ))
  }

}
