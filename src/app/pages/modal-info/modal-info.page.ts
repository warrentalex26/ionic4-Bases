import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() nombre; // El nombre de esta propiedad debe ser igual al del modal padre
  @Input() pais; // El nombre de esta propiedad debe ser igual al del modal padre

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  salirSinArgumentos() {
    this.modalController.dismiss();
  }

  salirConArgumentos() {
    this.modalController.dismiss({
      nombre: 'felipe',
      pais: 'España'
    });
  }

}
