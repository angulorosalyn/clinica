import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ToastController  } from 'ionic-angular';
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
  nombrePaciente:any;
  listReservas:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public webservice:TraerdatosProvider,
    private alert:AlertController,private toast:ToastController) {
    this.persona_id= navParams.get("id");
    this.nombrePaciente= navParams.get("nom");
    this.webservice.verReservas(this.persona_id).subscribe(rs=>{
      this.listReservas=rs;
     /// console.log(this.nomespecialidad.title);
    });
    

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultaReservadasPage');
  }

  cancelarReserva(id,idagenda){

    console.log("idagenda"+idagenda);
    let toast=this.toast.create({
      message:'se ha cancelado su cita',
      duration:3000,
      position:'top'
    });

   
   let alert = this.alert.create({
    title: 'Cancelar Cita',
    subTitle: 'Esta seguro que desea cancelar esta cita',
    buttons: [{
      text:'Si',     
      handler:()=>{

        this.webservice.cancelarReserva(id,idagenda).subscribe(rs=>{
          toast.onDidDismiss(()=>{});
          toast.present();
          this.navCtrl.pop();
         });
      }
    },{
      text:'No',
      role:'cancel',
      handler:()=>{ 
    

       }
    }]
  });
  alert.present();

    
  }

}
