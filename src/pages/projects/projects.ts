import { Component } from '@angular/core';
import {  NavController, NavParams, reorderArray } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage  } from '@ionic/storage';

import { Data } from '../../providers/data';

import { ProjectDetail } from '../project-detail/project-detail';

@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class Projects {


projects ;
currentProject = "nothing";

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private storage: Storage,
              private data: Data
              ) {

    this.storage.set('currentproject',"nothing");
        
  }


ionViewDidLoad(){


 

  this.storage.get('projects').then((value) => {
       
       if (value == null) {
         this.projects = []
       } else {
          this.projects = value;
       }
       console.log(value);
      });
               
}


  pushProject(){
    let prompt = this.alertCtrl.create({
      title: 'add Project',
      //message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'name',
          placeholder: 'Project name'
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
            this.projects.push(data.name);
            this.storage.set('projects',this.projects);
            
          }
        }
      ]
    });
    prompt.present();
  }
  
  reoderItem(indexes){
    this.projects = reorderArray(this.projects, indexes);
    this.saveProjects();
  }

  removeProject(item){
   let index = this.projects.indexOf(item);

    if (index > -1 ){
      this.projects.splice(index, 1);
    }
    this.saveProjects();
    this.removeAllProject(item);
    console.log('remove');
  }

  saveProjects(){
    return this.storage.set('projects',this.projects);
  }

  removeAllProject(project){
  this.storage.remove('project/characters/' + project
          );
 }

  goTo(project){

  this.storage.set('currentproject',project);
   this.navCtrl.push(ProjectDetail, {project: project});
  console.log('clic', project );
  }
}
