import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalInfoPage} from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async abrirModal() {
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Alexander',
        pais: 'Nicaragua'
      }
    });
    await modal.present();

    const { data } = await modal.onDidDismiss(); // Guardamos en data lo que venga del await del modal dismiss
    console.log('retorno del modal', data);
  }

}
