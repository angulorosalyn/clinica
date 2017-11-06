import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{RegistroCitaPage} from '../registro-cita/registro-cita';
/**
 * Generated class for the MenuOpcionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-opciones',
  templateUrl: 'menu-opciones.html',
})
export class MenuOpcionesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuOpcionesPage');
  }
  regcita(){
  this.navCtrl.push(RegistroCitaPage);
  }
}
