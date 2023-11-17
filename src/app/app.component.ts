import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@capacitor/status-bar';
import { AnimationController, Platform } from '@ionic/angular';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

 

  myCustomPageTransition = ((baseEl: any, opts?: any) => { 
    console.log("opts.enteringEl:"  + opts.enteringEl); //Entering Element - New Page
    console.log("opts.leavingEl:"  + opts.leavingEl);   //Leaving Element - Current Page
    var anim1 = this.animationCtrl.create()
      .addElement(opts.leavingEl)
      .duration(500)
      .iterations(1)
      .easing('ease-out')
      .fromTo('opacity', '1', '0.0')
    var anim2 = this.animationCtrl.create()
      .addElement(opts.enteringEl)
      .duration(500)
      .iterations(1)
      .easing('ease-out')
      .fromTo('opacity', '0.0', '1')
     var anim2 = this.animationCtrl.create()
      .duration(500)
      .iterations(1)
      .addAnimation([anim1, anim2]);
    return anim2;
});


constructor(
  private platform: Platform,
  private animationCtrl: AnimationController,
  private router : Router
) {
  this.initializeApp();
}
initializeApp() {
  this.platform.ready().then(() => {
  });
}
}