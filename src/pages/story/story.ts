import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { Storage  } from '@ionic/storage';
import { StoryLine } from '../story-line/story-line';
import { StoryFlow } from '../story-flow/story-flow';
 


@Component({
  selector: 'page-story',
  templateUrl: 'story.html'
})
export class Story {

project;
currentproject;
menu;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public menuCtrl: MenuController,
              private storage: Storage) {

  this.menuCtrl.enable(true);

                  this.menu = [
                  {title: 'write', component: StoryLine, thumb: '/assets/img/story.png'},
                  {title: 'flow', component: StoryFlow, thumb: '/assets/img/magic-wand.png'}                                                                                               
                  ]


}

                

  goTo(menu){
   this.navCtrl.push(menu.component, {project : this.project});
  }


  ionViewDidLoad() {

        this.storage.get('currentproject').then(
      (value)=> {this.currentproject = value});
      

  }

   openMenu() {
   this.menuCtrl.open('right');
 }



}
