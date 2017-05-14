import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the PopObject page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-pop-object',
  templateUrl: 'pop-object.html',
})
export class PopObject {

constructor(public viewCtrl: ViewController) {}
close() {
    this.viewCtrl.dismiss();
  }

}
