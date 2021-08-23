import { Component,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-city',
  templateUrl: './new-city.component.html',
  styleUrls: ['./new-city.component.css']
})
export class NewCityComponent implements OnInit {
  @Output() newCityEvent = new EventEmitter<string>();
  constructor() { }
  newCity(newName: string) {
    this.newCityEvent.emit(newName);
  }


  ngOnInit() {
  }

}