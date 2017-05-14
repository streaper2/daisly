import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoryLine } from './story-line';

@NgModule({
  declarations: [
    StoryLine,
  ],
  imports: [
    IonicPageModule.forChild(StoryLine),
  ],
  exports: [
    StoryLine
  ]
})
export class StoryLineModule {}
