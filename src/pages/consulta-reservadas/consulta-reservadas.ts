import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TraerdatosProvider } from '../../providers/traerdatos/traerdatos';

/**
 * Generated class for the ConsultaReservadasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consulta-reservadas',
  templateUrl: 'consulta-reservadas.html',
})
export class ConsultaReservadasPage {
  persona_id:any;
  listReservas:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public webservice:TraerdatosProvider) {
    this.persona_id= navParams.get("id");
    this.webservice.verReservas(this.persona_id).subscribe(rs=>{
      this.listReservas=rs;
     /// console.log(this.nomespecialidad.title);
    });
    

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultaReservadasPage');
  }

}
