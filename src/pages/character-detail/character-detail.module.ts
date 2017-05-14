import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharacterDetail } from './character-detail';

@NgModule({
  declarations: [
    CharacterDetail,
  ],
  imports: [
    IonicPageModule.forChild(CharacterDetail),
  ],
  exports: [
    CharacterDetail
  ]
})
export class CharacterDetailModule {}
