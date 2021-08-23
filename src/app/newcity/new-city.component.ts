import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcity',
  templateUrl: './new-city.component.html',
  styleUrls: ['./new-city.component.css']
})
export class NewcityComponent implements OnInit {
  @Output() newCityEvent = new EventEmitter<string>();
  constructor() { }
  newCity(newName: string) {
    this.newCityEvent.emit(newName);
  }


  ngOnInit() {
  }

}