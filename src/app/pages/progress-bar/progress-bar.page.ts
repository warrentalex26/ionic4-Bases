import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

  porcentaje = 0.05;

  constructor() { }

  ngOnInit() {
  }

  cambioRango(evento) {
    console.log(evento);
    console.log(evento.detail.value);
    this.porcentaje = evento.detail.value / 100; // Lo divimos entre 100 para obtener valores entre 1 y 100 y cambie la progress bar
  }

}
