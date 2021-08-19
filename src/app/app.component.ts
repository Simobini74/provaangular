import { Component } from '@angular/core'; 
import { OpenweatherService } from './openweather.service';


class Postit {
  nome: string;
  data: string;
  colore: string;
  temperatura: string;
  contenuto: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prova progetto';
  selezionato: Postit; 
  postit:Array<Postit> = [
    {
      nome: 'Torino',
      data: '14 luglio',
      colore: 'rosso',
      contenuto: 'pippo',
      temperatura:'25 gradi'
    }, {
      nome: 'Milano',
      data: '14 agosto',
      colore: 'verde',
      contenuto: 'pluto',
      temperatura: '30 gradi'
    }, {
      nome: 'Genova',
      data: '18 maggio',
      colore:'blu',
      contenuto:'paperino',
      temperatura:'28 gradi'
    }
  ]; 
  constructor(private wbs: OpenweatherService) { } 
  refreshTemperature(itemName: string) {
    var trovato: Array<Postit> = this.postit.filter(
      el => ( el.nome === itemName )
    );
    this.selezionato = trovato[0];
    this.wbs.getData(this.selezionato.nome).subscribe(
      ( x: any ) => this.selezionato.temperatura = x.data[0].temp,
      err => console.error('Observer got an error: ' + err)
    );
 }

  clean() {
    this.selezionato=undefined;
  }
}
