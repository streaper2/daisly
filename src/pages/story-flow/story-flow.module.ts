import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoryFlow } from './story-flow';

@NgModule({
  declarations: [
    StoryFlow,
  ],
  imports: [
    IonicPageModule.forChild(StoryFlow),
  ],
  exports: [
    StoryFlow
  ]
})
export class StoryFlowModule {}
