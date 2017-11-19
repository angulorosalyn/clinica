
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
  usuariodocu:any;
  reslogin:any;
  constructor(public navCtrl: NavController, private prov: TraerdatosProvider, private alert:AlertController) {    
      
  }
    irMenuOpp()
    {
      let alert = this.alert.create({
        title: 'Usuario no Registrado',
        subTitle: 'El Usuario no se encuentra registrado en Medimovil',
        buttons: ['OK']
      });
      
      let cedulaDB;
       this.prov.logueo(this.usuariodocu).subscribe(rs=>{
        this.reslogin=rs;
        for(let dato of rs){
             cedulaDB= dato.validar;
        }

        if(cedulaDB=='ok'){
             this.navCtrl.push(MenuOpcionesPage); 
        }else{
          alert.present();
        }
         //console.log("resp"+this.reslogin.nombre);
      });
     
     
    }


    registro(){
      this.navCtrl.push(RegistroPersonaPage);
    }
}
