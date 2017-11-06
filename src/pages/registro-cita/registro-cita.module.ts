import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistroCitaPage } from './registro-cita';

@NgModule({
  declarations: [
    RegistroCitaPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroCitaPage),
  ],
})
export class RegistroCitaPageModule {}
