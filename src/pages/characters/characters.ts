import { Component } from '@angular/core';
import {  NavController, NavParams, reorderArray } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage  } from '@ionic/storage';

import { CharacterDetail } from '../character-detail/character-detail';

@Component({
  selector: 'page-characters',
  templateUrl: 'characters.html',
})

export class Characters {



characters = [];
project;
currentCharacter = "nothing";

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private storage: Storage) {

    this.storage.set('currentcharacter',"nothing");
            
        
  }


ionViewWillEnter(){
  
  this.project = this.navParams.get('project');
      console.log(this.project);

  this.storage.get('project/characters/'+ this.project).then((value) => {
       
       if (value == null) {
         this.characters = []
       } else {
          this.characters = value.characters;
       }
       console.log(value);
      });
      
      
}


  pushCharacter(){
    let prompt = this.alertCtrl.create({
      title: 'add Character',
      //message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'name',
          placeholder: 'Character name'
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
            this.characters.push({name: data.name});
            //this.storage.set('projects',{characters: this.characters});
            this.saveCharacters();
          }
        }
      ]
    });
    prompt.present();
  }
  
  reoderItem(indexes){
    this.characters = reorderArray(this.characters, indexes);
    this.saveCharacters();
  }

  removeCharacter(item){
   let index = this.characters.indexOf(item);

    if (index > -1 ){
      this.characters.splice(index, 1);
    }
    this.saveCharacters();
    console.log('remove');
  }

  saveCharacters(){
    return this.storage.set('project/characters/' + this.project, 
             {characters: this.characters}
          );
  }


  goTo(character){

  this.storage.set('currentcharacter',character);
   this.navCtrl.push(CharacterDetail, {character: character});
  console.log('clic', character );
  }

}
