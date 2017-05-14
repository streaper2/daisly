import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule  } from '@ionic/storage';

//components
import { ScrollableTabs } from '../components/scrollable-tabs/scrollable-tabs';

//pages
import { MyApp } from './app.component';
import { Projects } from '../pages/projects/projects';
import { ProjectDetail } from '../pages/project-detail/project-detail';
import { Story } from '../pages/story/story';
import { StoryLine } from '../pages/story-line/story-line';
import { StoryFlow } from '../pages/story-flow/story-flow';
import { Templates } from '../pages/templates/templates';
import { PopObject } from '../pages/pop-object/pop-object';
import { Characters } from '../pages/characters/characters';
import { CharacterDetail } from '../pages/character-detail/character-detail';
import { Items } from '../pages/items/items';
import { Locations } from '../pages/locations/locations';

//page templates
import { TemplateSettings } from '../pages/template-settings/template-settings';
import { TemplateCharacters } from '../pages/template-characters/template-characters';
import { TemplateCharactersDetails } from '../pages/template-characters-details/template-characters-details';


//providers
import { Data } from '../providers/data';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';




@NgModule({
  declarations: [
    MyApp,
    ScrollableTabs,
    Projects,
    ProjectDetail,
    Story,
    StoryLine,
    StoryFlow,
    Templates,
    TemplateCharacters,
    TemplateCharactersDetails,
    TemplateSettings,
    PopObject,
    Characters,
    CharacterDetail,
    Items,
    Locations,

  ], 
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({ name: 'daisly', driverOrder: ['indexeddb', 'websql']}),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Projects,
    ProjectDetail,
    Story,
    StoryLine,
    StoryFlow,
    Templates,
    TemplateCharacters,
    TemplateCharactersDetails,
    TemplateSettings,
    PopObject,
    Characters,
    CharacterDetail,
    Items,
    Locations,

  ],
  providers: [
    Data,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
