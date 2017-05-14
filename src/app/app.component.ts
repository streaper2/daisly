import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



import { Projects } from '../pages/projects/projects';
import { Story } from '../pages/story/story';
import { Templates } from '../pages/templates/templates';
import { Characters } from '../pages/characters/characters';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Projects; 

  pages: Array<{title: string, component: any}>;
  tools: Array<{title: string, component: any}>;
  project;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Projects', component: Projects }
    ];

    this.tools = [
      { title: 'Story', component: Story },
      { title: 'Templates', component: Templates },
      { title: 'Characters', component: Characters }
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
    openObject(tools) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.navCtrl.push(page.component, {project: page.component.project})
    this.nav.push(tools.component, {project: this.project});
    this.nav.setRoot(tools.component );
    
    
  }
}
