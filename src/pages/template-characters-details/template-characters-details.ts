import { Component } from '@angular/core';
import { NavController, NavParams, AlertController,reorderArray } from 'ionic-angular';

/**
 * Generated class for the TemplateCharacters page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-template-characters-details',
  templateUrl: 'template-characters-details.html',
})
export class TemplateCharactersDetails {

model;
items:any[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private alertCtrl: AlertController,
              ) {

       
        }


ngOnInit(){
        // this.model = this.navParams.get('model');
         this.items == undefined ? this.items =[] : this.items =   this.items;        
}




fabCloser(fabMain, fab){
         if (fab !== undefined) {
          fab.close();
          fabMain.close();
       }
}


addTitle(item?){
 
  let name;
  let getData;
  let index = 0;

      if (item == undefined){
        name="texte";
        getData="";
        
      } else {
        index = this.items.indexOf(item);
        name = item.name;
        getData = item.name;
      }

  let alert = this.alertCtrl.create({
    title: 'Titre',
    inputs: [
      {
        name: 'name',
        placeholder: name,
        value: getData
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => 
        {
          console.log("this items  in alert: " + this.items);
          if (item == undefined){
            this.items.push( {name:  data.name , type: 'ion-title'});
          } else {

            this.items.push ({name:  data.name , type: 'ion-title'}) ;
        
          }
          
        }
      }
    ]
  });
  alert.present();
}


addToggle(item){

    let name;
  let getData;
  let index = this.items.indexOf(item);
      
      if (item == undefined){
        name="texte";
        getData="";
      } else {
        name = item.name;
        getData = item.name;
      }

  let alert = this.alertCtrl.create({
    title: 'Toggle',
    inputs: [
      {
        name: 'name',
        value: getData,
        placeholder: name
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => 
        {
          
          if (item == undefined){
            this.items.push( {name:  data.name , type: 'ion-toggle'});            
          } else {

            this.items[index] = {name:  data.name , type: 'ion-toggle'};
        
          }
          
        }
      }
    ]
  });
  alert.present();
}


addTextInput(item) {
  
    let name;
  let getData;
  let index = this.items.indexOf(item);
      
      if (item == undefined){
        name="texte";
        getData="";
      } else {
        name = item.name;
        getData = item.name;
      }

  let alert = this.alertCtrl.create({
    title: 'ligne de saisie',
    inputs: [
      {
        name:  'name',
        placeholder: name,
        value: getData
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {

         if (item == undefined){
          this.items.push({name:  data.name , type: 'ion-text'});            
         } else {

           this.items[index] = {name:  data.name , type: 'ion-text'};
       
        }
          
          console.log(this.items)
        }
      }
    ]
  });
  alert.present();
}

addNumberInput(item) {
  
    let name;
  let getData;
  let index = this.items.indexOf(item);
      
      if (item == undefined){
        name="texte";
        getData="";
      } else {
        name = item.name;
        getData = item.name;
      }

  let alert = this.alertCtrl.create({
    title: 'Nombre',
    inputs: [
      {
        name: 'name',
        value: getData,
        placeholder: name
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {

          
          if (item == undefined){
            this.items.push({name:  data.name , type: 'ion-number'})            
          } else {

            this.items[index] = {name:  data.name , type: 'ion-number'};
        
          }
        }
      }
    ]
  });
  alert.present();
}

addTextArea(item){

    let name;
  let getData;
  let index = this.items.indexOf(item);
      
      if (item == undefined){
        name="texte";
        getData="";
      } else {
        name = item.name;
        getData = item.name;
      }

  let alert = this.alertCtrl.create({
    title: 'paragraphe de saisie',
    inputs: [
      {
        name: 'name',
        value: getData,
        placeholder: name
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => 
        {


          if (item == undefined){

            this.items.push( {name:  data.name , type: 'ion-textarea'});
                  
          } else {

            this.items[index] = {name:  data.name , type: 'ion-textarea'};
        
          }

        }
      }
    ]
  });
  alert.present();
}


addRange(item){

  let name,min, max, unite;
  let getName, getMin, getMax, getUnite;
  let index = this.items.indexOf(item);
      
      if (item == undefined){
        [name, min, max, unite]=["texte", "min" , "max" , "unité (m, km, €, ...)"];
        [getName, getMin, getMax, getUnite]=["","","",""];
      } else {
        name = item.name;
        [name, min, max, unite] = [item.name, item.min, item.max, item.unite];
        [getName, getMin, getMax, getUnite]=[item.name, item.min, item.max, item.unite];
      }

      //item == undefined ? [name, min, max, unite]=["texte", "min" , "max" , "unité (m, km, €, ...)"]: [name, min, max, unite] = [item.name, item.min, item.max, item.unite] ;
      
  let alert = this.alertCtrl.create({
    title: 'ajouter une intervalle',
    inputs: [
      {
        name: 'name',
        placeholder: name,
        value: getName
      },
      {
        type: 'number',
        name: 'min',
        placeholder: getMin,
        value: getMin
      },
      {
        type:'number',
        name: 'max',
        placeholder: getMax,
        value: getMax
      },
      {
        name: 'unite',
        placeholder: getUnite,
        value: getUnite
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => 
        {
          
          
          if (item == undefined){

            this.items.push({name:  data.name ,
                           type: 'ion-range',
                           value: 0,  
                           min:  data.min , 
                           max:  data.max, 
                           unite: data.unite
                           });
                  
          } else {

            this.items[index] = {name:  data.name ,
                           type: 'ion-range',
                           value: 0,  
                           min:  data.min , 
                           max:  data.max, 
                           unite: data.unite
                           };
        
          }
        }
      }
    ]
  });
  alert.present();
}






  modifyItem(item){
   item.type == "ion-title" ? this.addTitle(item) : console.log("ne pas modifier") ;
   item.type == "ion-text" ? this.addTextInput(item) : console.log("ne pas modifier") ;   
   item.type == "ion-toggle" ? this.addToggle(item) : console.log("ne pas modifier") ;
   item.type == "ion-number" ? this.addNumberInput(item) : console.log("ne pas modifier") ;
   item.type == "ion-textarea" ? this.addTextArea(item) : console.log("ne pas modifier") ;
   item.type == "ion-datetime" ? this.addTextInput(item) : console.log("ne pas modifier") ;
   item.type == "ion-range" ? this.addRange(item) : console.log("ne pas modifier") ;
  
  }


  //remove localy item
  removeItem(item){
   let index = this.items.indexOf(item);

    if (index > -1 ){
      this.items.splice(index, 1);
    }
    console.log('remove');
  }

  saveModel(model, items){

    console.log("this model :" + model,"this items :" + items)
    this.items.push( model, items );
    //this.navCtrl.pop();
  }

  reoderItem(indexes){
    this.items = reorderArray(this.items, indexes);
  }


}
