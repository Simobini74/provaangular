import { Component } from '@angular/core'; 
import { OpenweatherService } from './openweather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prova progetto';
  selezionato: string; 
  temperatura: string;
  postit:Array<string> = ['Torino','Milano','Genova'];  
  
  constructor(private wbs: OpenweatherService) { } 
  refreshTemperature(itemName: string) {     

    this.selezionato = itemName;
    this.wbs.getData(itemName).subscribe(
      ( x: any ) => this.temperatura = x.data[0].temp,
      err => console.error('Observer got an error: ' + err)
    );
 }

  clean() {
    this.selezionato=undefined;
  }
}
