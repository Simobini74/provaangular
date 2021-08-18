import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prova progetto';
  selezionato: string;
  seleziona(name:string){
    this.selezionato=name;
  }
  clean() {
    this.selezionat=undefined;
  }

  postit = [
    {
      nome: 'Post-it 1',
      data: '14 luglio',
      colore: 'rosso',
      contenuto: 'pippo'
    }, {
      nome: 'Post-it 2',
      data: '14 agosto',
      colore: 'verde',
      contenuto: 'pluto'
    }, {
      nome: 'Post-it 3',
      data: '18 maggio',
      colore:'blu',
      contenuto:'paperino'
    }
  ];
}
