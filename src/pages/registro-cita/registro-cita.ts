import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TraerdatosProvider } from '../../providers/traerdatos/traerdatos';
/**
 * Generated class for the RegistroCitaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro-cita',
  templateUrl: 'registro-cita.html',
})
export class RegistroCitaPage {
  
  tipoMedico:any;
  nomespecialidad:any;  

  constructor(public navCtrl: NavController, public navParams: NavParams,public d:TraerdatosProvider) {
     this.tipoMedico="esp";
        this.d.getespecialidad().subscribe(rs=>{
      this.nomespecialidad=rs;
      console.log(this.nomespecialidad.title);
    });
    
   
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad RegistroCitaPage');
  }

}
