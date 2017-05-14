import { Component } from '@angular/core';
import {  NavController, NavParams, reorderArray } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage  } from '@ionic/storage';

import { TemplateCharactersDetails } from '../template-characters-details/template-characters-details';


@Component({
  selector: 'page-template-characters',
  templateUrl: 'template-characters.html',
})
export class TemplateCharacters {


  
templateCharacters = [];
currentProject;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private storage: Storage) {

        
  }



ionViewWillEnter(){
  
  this.storage.get( this.currentProject + '/templateCharacters').then((value) => {
       
       if (value == null) {
         this.templateCharacters = [];
       } else {
          this.templateCharacters = value;
       }
      });

    this.storage.get('currentproject').then((value) => {
          this.currentProject = value;

      });


  console.log("currentProject", this.currentProject);
}


  pushTemplateCharacter(){
    let prompt = this.alertCtrl.create({
      title: 'add Template',
      //message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'name',
          placeholder: 'Template name'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.templateCharacters.push(data.name);
            this.storage.set(this.currentProject + '/templateCharacters',this.templateCharacters);
            console.log("tpcharacters", this.templateCharacters);
            
          }
        }
      ]
    });
    prompt.present();
  }
  
  reoderItem(indexes){
    this.templateCharacters = reorderArray(this.templateCharacters, indexes);
    this.saveTemplateCharacters();
  }

  removeTemplateCharacter(item){
   let index = this.templateCharacters.indexOf(item);

    if (index > -1 ){
      this.templateCharacters.splice(index, 1);
    }
    this.saveTemplateCharacters();
    console.log('remove');
  }

  saveTemplateCharacters(){
    return this.storage.set('templateCharacters',this.templateCharacters);
  }


  goTo(templateCharacter){

  this.storage.set('currentproject', templateCharacter);
  this.navCtrl.push(TemplateCharactersDetails, {templateCharacter: templateCharacter});
  console.log('clic', templateCharacter );
  }

  backMenu(){
    this.navCtrl.pop();
  }
}