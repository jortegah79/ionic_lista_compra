import { Component, EnvironmentInjector, inject } from '@angular/core';
//import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { bagAddOutline, cartOutline } from 'ionicons/icons';
import { IonicModule } from '@ionic/angular';

@Component({
  selector:   'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports:[IonicModule]
  //imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ cartOutline,bagAddOutline });
  }
}
