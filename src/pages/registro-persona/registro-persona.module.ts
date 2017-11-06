import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistroPersonaPage } from './registro-persona';

@NgModule({
  declarations: [
    RegistroPersonaPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroPersonaPage),
  ],
})
export class RegistroPersonaPageModule {}
