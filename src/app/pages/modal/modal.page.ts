import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async mostrarModal() {

    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Andrea',
        pais: 'Venezuela',
      }
    });

    await modal.present();

    //El onWillDismiss es mas rapido
    const { data } = await modal.onWillDismiss();
    //const { data } = await modal.onDidDismiss();

    console.log(data);
    console.log(JSON.stringify(data));

  }

}
