import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaDeNacimiento: Date = new Date();
  customPickerOptions;
  customDate;
  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (evento) => {
          console.log('Clicked Save!');
          console.log(evento);
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    };
  }

  cambioFecha(evento) {
    console.log('ionChange', evento);
    console.log('Date', new Date(evento.detail.value));
  }

}
