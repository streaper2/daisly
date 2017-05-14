import { Component, Output, EventEmitter  } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TemplateCharacters page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-template-settings',
  templateUrl: 'template-settings.html',
})
export class TemplateSettings {


  @Output('tabToShow') tabToShow= new EventEmitter ;
  @Output(' refreshScrollbarTabs() ') refreshScrollbarTabs = new EventEmitter ;



  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.tabToShow = this.navParams.data;
    console.log(this.tabToShow)

  }



  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Settings');
  }

}
