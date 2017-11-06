import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegistroPersonaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro-persona',
  templateUrl: 'registro-persona.html',
})
export class RegistroPersonaPage {
  userData = {username: "",password: "", name: "",email: "",apellido:"", telefono: "", genero: "",tiposangre:"", direccion:"", estadocivil:""};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPersonaPage');
  }

}
