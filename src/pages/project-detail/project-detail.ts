import { Component } from '@angular/core';
import { NavController, 
        NavParams, 
        MenuController, 
        PopoverController  } from 'ionic-angular';

import { Story } from '../story/story';
import { Templates } from '../templates/templates';
import { Characters } from '../characters/characters';
import { Items } from '../items/items';
import { Locations } from '../locations/locations';


import { PopObject } from '../pop-object/pop-object';



@Component({
  selector: 'page-project-detail',
  templateUrl: 'project-detail.html',
})


export class ProjectDetail {

project;
menu;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public menuCtrl: MenuController,
              public popoverCtrl: PopoverController,
               ) {

                this.menuCtrl.enable(true);

                this.menu = [
                  {title: 'storyz', component: Story, thumb: '/assets/img/story.png'},
                  {title: 'templates', component: Templates, thumb: '/assets/img/magic-wand.png'},
                  {title: 'characters', component: Characters, thumb: '/assets/img/little-red-riding-hood.png'},
                  {title: 'items', component: Items, thumb: '/assets/img/unicorn.png'},
                  {title: 'locations', component: Locations, thumb: '/assets/img/castle.png'}                                          
                                                                                                                        
                  ]
  }

  ionViewDidLoad() {
    this.project = this.navParams.get('project');
    console.log('project loaded', this.project);
  }

   openMenu() {
   this.menuCtrl.open('right').then();
 }
 presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopObject);
    popover.present({
      ev: myEvent
    });
  }
  goTo(menu){
   this.navCtrl.push(menu.component, {project : this.project});
  }
}
