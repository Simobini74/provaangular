import { Component } from '@angular/core'; 
import { OpenweatherService } from './openweather.service';

class cityTemp {
  luogo: string;
  valore: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prova progetto';   
  postit:Array<string> = ['Torino','Milano','Genova'];  
  selezione: cityTemp = new cityTemp();  
  constructor(private wbs: OpenweatherService) { } 
  refreshTemperature(itemName: string) {     

    this.selezione.luogo = itemName;
    this.wbs.getData(itemName).subscribe(
      ( x: any ) => this.selezione.valore = x.data[0].temp,
      err => console.error('Observer got an error: ' + err)
    );
 }

  clean() {
    this.selezione.luogo=undefined;
  }
}
