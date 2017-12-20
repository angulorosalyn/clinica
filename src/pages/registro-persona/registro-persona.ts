import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TraerdatosProvider } from '../../providers/traerdatos/traerdatos';
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
  userData = {"documento":"","name": "","email": "","apellido":"", "telefono": "", "genero": "","tiposangre":"","fecha":"", "direccion":"", "estadocivil":"", "eps":""};
  constructor(public navCtrl: NavController, public navParams: NavParams,public webservice:TraerdatosProvider) {
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPersonaPage');
  }

  signup(){

    this.webservice.registroUser(this.userData).subscribe(rs=>{
      
     /// console.log(this.nomespecialidad.title);
    });
    console.log(this.userData);
  }
}
