import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {PopinfoComponent} from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

  async mostrarPop(evento) {
    const popOver = await this.popoverController.create({
      component: PopinfoComponent,
      event: evento,
      mode: 'ios',
      backdropDismiss: false
    });

    await popOver.present();

    // const {data} = await popOver.onDidDismiss(); // Recibimos el valor del componente hijo y se dispara luego de la promesa del hijo
    const {data} = await popOver.onWillDismiss(); // Recibimos el valor del componente hijo y lo disparamos al instante
    console.log('padre', data);

  }

}
