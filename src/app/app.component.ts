import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
 //Función asincrónica para que se muestre el splash screen
  async showSplashScreen(){
    await SplashScreen.show({
      showDuration: 4000,
      autoHide: true,
    });

  }
}
