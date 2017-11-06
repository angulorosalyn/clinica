import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule} from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuOpcionesPage } from '../pages/menu-opciones/menu-opciones';
import { TraerdatosProvider } from '../providers/traerdatos/traerdatos';
import{RegistroPersonaPage} from '../pages/registro-persona/registro-persona';
import{RegistroCitaPage} from '../pages/registro-cita/registro-cita';
@NgModule({
  declarations: [
    MyApp,
    HomePage,MenuOpcionesPage,RegistroPersonaPage,RegistroCitaPage
  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,MenuOpcionesPage,RegistroPersonaPage,RegistroCitaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TraerdatosProvider
  ]
})
export class AppModule {}
