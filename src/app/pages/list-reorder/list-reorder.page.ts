import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes = ['Aquaman', 'Superman', 'Batman', 'Flash', 'Mujer Maravilla'];

  constructor() { }

  ngOnInit() {
  }

  reOrder(evento) {

    // Alternativa al mover los elementos
    // const itemMover = this.personajes.splice(evento.detail.from, 1)[0];
    // this.personajes.splice(evento.detail.to, 0, itemMover);

    console.log(`Moving item from ${evento.detail.from} to ${evento.detail.to}`);
    this.personajes = evento.detail.complete(this.personajes);
  }

  onClick(){
    console.log(this.personajes);
  }

}
