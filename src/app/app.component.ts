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
      nome: 'Post-it 1',
      data: '14 luglio',
      colore: 'rosso',
      contenuto: 'pippo',
      temperatura:'25 gradi'
    }, {
      nome: 'Post-it 2',
      data: '14 agosto',
      colore: 'verde',
      contenuto: 'pluto',
      temperatura: '30 gradi'
    }, {
      nome: 'Post-it 3',
      data: '18 maggio',
      colore:'blu',
      contenuto:'paperino',
      temperatura:'28 gradi'
    }
  ];
  seleziona(itemName: string) {
    var trovato: Array<Postit> = this.postit.filter(
      el => ( el.nome === itemName )
    );
    this.selezionato = trovato[0];
  }

  clean() {
    this.selezionato=undefined;
  }
}
