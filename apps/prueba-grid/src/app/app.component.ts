import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pokedex-gently-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  pcHd:number | undefined;
  pcSd:number | undefined;
  tablet:number | undefined;
  telefono:number | undefined;

  constructor() {''};

  handleSize(event: any) {
    this.pcHd = (event.target.innerWidth <= 1080) ? 7 : 7;
    this.pcSd = (event.target.innerWidth <= 768) ? 5 : 7;
    this.tablet = (event.target.innerWidth <= 720) ? 3 : 7;
    this.telefono = (event.target.innerWidth <= 480) ? 1 : 7;
  }

  ngOnInit() {
    this.handleSize('');
  }
}
