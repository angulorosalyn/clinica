import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TraerdatosProvider } from '../../providers/traerdatos/traerdatos';
import { AlertController ,ToastController} from 'ionic-angular';
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
  constructor(public navCtrl: NavController, private alert:AlertController,public navParams: NavParams,public webservice:TraerdatosProvider, private toast:ToastController) {
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPersonaPage');
  }

  signup(){
    let alert = this.alert.create({
      title: 'Faltan datos por llenar',
      subTitle: 'Hay campos obligatorios sin registrar, por favor verificar',
      buttons: ['OK']
    });

    let toast=this.toast.create({
      message:'su ha registrado su información',
      duration:5000,
      position:'top'
    });

if(this.userData.documento=="" || this.userData.name=="" || this.userData.email=="" || this.userData.telefono=="" || this.userData.tiposangre=="" )
{

  alert.present();
}
else{

  let alert = this.alert.create({
    title: 'Registrar Paciente',
    subTitle: 'Esta seguro que desea resgistarse',
    buttons: [{
      text:'Si',      
      handler:()=>{

        this.webservice.registroUser(this.userData).subscribe(rs=>{    
          /// console.log(this.nomespecialidad.title);
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
    
   // console.log(this.userData);
  }
}
