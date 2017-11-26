import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController,ToastController } from 'ionic-angular';
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
  medicosEspecialistas:any;
  nomespecialidad:any; 
  agendaMedicoDia:any[]=[];
  idmedico_arg:number; 
  horario:any[]=[];
persona_id:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public webservice:TraerdatosProvider,private alert:AlertController,
  private toast:ToastController) {
     this.tipoMedico="esp";
      this.persona_id= navParams.get("id");
        this.webservice.getespecialidad().subscribe(rs=>{
      this.nomespecialidad=rs;
      console.log(this.nomespecialidad.title);
    });
    
   
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad RegistroCitaPage');
  }
   
  optionSelected(idespecialidad){
   console.log(idespecialidad);
   this.horario=[];
   this.agendaMedicoDia=[];
   this.webservice.getmedicoespecilista(idespecialidad).subscribe(rs=>{
    this.medicosEspecialistas=rs;
   });
  }

  selectDiaMedico(idmedico){
    this.horario=[];
    this.agendaMedicoDia=[];
      this.idmedico_arg=idmedico;
   this.webservice.getdiagendamedico(idmedico).subscribe(rs=>{
    
    this.agendaMedicoDia=rs;
   });
  }

  horario_medico(dia){
    console.log(dia+" "+this.idmedico_arg);
    
    this.webservice.horaioMedico(this.idmedico_arg,dia).subscribe(rs=>{
      this.horario=rs;
     });
  }

  reservarCita(idagenda){
   console.log("idagenda"+idagenda);
    let toast=this.toast.create({
      message:'se ha reservado su cita',
      duration:3000,
      position:'top'
    });

   
   let alert = this.alert.create({
    title: 'Confirmar Cita',
    subTitle: 'Esta seguro que desea reservar esta cita',
    buttons: [{
      text:'Cancelar',
      role:'cancel',
      handler:()=>{

      }
    },{
      text:'Reservar',
      handler:()=>{ this.webservice.resgistrarReserva(idagenda,this.persona_id).subscribe(rs=>{ 
        toast.onDidDismiss(()=>{});
        toast.present();
        this.navCtrl.pop();
      });}
    }]
  });
  alert.present();
   
  }


}
