
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuOpcionesPage } from '../menu-opciones/menu-opciones';
import {TraerdatosProvider} from '../../providers/traerdatos/traerdatos';
import { AlertController } from 'ionic-angular';
import{RegistroPersonaPage} from '../registro-persona/registro-persona'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
 
})
export class HomePage {  
  usuariodocu:any="";
  reslogin:any;
  idp:any;
  nombre:any;
  apellido:any;
  constructor(public navCtrl: NavController, private prov: TraerdatosProvider, private alert:AlertController) {    
      
  }
    irMenuOpp()
    {
      let alert = this.alert.create({
        title: 'Usuario no Registrado',
        subTitle: 'El Usuario no se encuentra registrado en Medimovil o no ha sido activado.',
        buttons: ['OK']
      });
      
      let cedulaDB;
      if(this.usuariodocu!="")
      {
        this.prov.logueo(this.usuariodocu).subscribe(rs=>{
          this.reslogin=rs;
          for(let dato of rs){
               cedulaDB= dato.validar;
               this.idp=dato.id;
               this.nombre=dato.nombre;
               this.apellido=dato.apellido;
  
          }
  
          if(cedulaDB=='ok'){
           // console.log("id"+this.idp+"nom"+this.nombre);
               this.navCtrl.push(MenuOpcionesPage,{id:this.idp,nombre:this.nombre+" "+this.apellido}); 
          }else{
            alert.present();
          }
           //console.log("resp"+this.reslogin.nombre);
        });
      }
      else{
        let alert2 = this.alert.create({
          title: 'Campo Vacio',
          subTitle: 'Por favor ingresar un Documento de Identidad',
          buttons: ['OK']
        });
        alert2.present();
      }
     
     
    }


    registro(){
      this.navCtrl.push(RegistroPersonaPage);
    }
}
