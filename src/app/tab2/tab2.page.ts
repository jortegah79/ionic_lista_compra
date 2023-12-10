import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { ShoppingItemsService } from '../services/shopping-items.service';
import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class Tab2Page {

  private shoppingItemsService = inject(ShoppingItemsService);
  private alertController = inject(AlertController);

  newItem: string = "";

  constructor() {
    addIcons({ addOutline });
  }

  addItem(): void {

    if (this.newItem === "") return;

    if (!this.shoppingItemsService.existsItem(this.newItem)) {

      this.shoppingItemsService.addItem(this.newItem);
      this.alertSuccess();

    } else {

      this.alertError();
    }
    this.newItem = "";
  }

  async alertSuccess() {

    const alert = await this.alertController.create({
      header: "Éxito",
      message: "¡Item añadido!",
      buttons: ['Ok']
    })

    await alert.present();
  }

  async alertError() {

    const alert = await this.alertController.create({
      header: "Error",
      message: "¡El item ya existe!",
      buttons: ['Ok']
    })
    await alert.present();
  }
}
