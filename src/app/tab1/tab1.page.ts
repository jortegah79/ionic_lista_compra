import { Component,  inject } from '@angular/core';
import { IonicModule, AlertController,MenuController } from '@ionic/angular';

import { ShoppingItemsService } from '../services/shopping-items.service';
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class Tab1Page {

  private shoppingItemsService = inject(ShoppingItemsService);
  private alertController = inject(AlertController);
  private menuCnt = inject(MenuController);

  list: string[] = [];

  constructor() {
    addIcons({ trashOutline });
    this.list = this.shoppingItemsService.items;
  }
  async removeItem(item: string) {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Estas seguro de borrar el item?',
      buttons: [
        {
          text: 'Si',
          handler: () =>{
            this.shoppingItemsService.removeItem(item);

          }
          }, {
          text: 'No',
          handler: () => alert.dismiss()
        }
      ]
    })
    alert.present();
  }

  onRenderItem(event:CustomEvent):void{
    event.detail.complete();

  }
  async removeAll() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Estas seguro de borrar la lista completa?',
      buttons: [
        {
          text: 'Si',
          handler: () =>{
            this.shoppingItemsService.removeAllItems()
            this.list=this.shoppingItemsService.items;
            this.menuCnt.close();
          }
        }, {
          text: 'No',
          handler: () => alert.dismiss()
        }
      ]
    })
    alert.present();
  }



}
