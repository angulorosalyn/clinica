
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuOpcionesPage } from '../menu-opciones/menu-opciones';

import{RegistroPersonaPage} from '../registro-persona/registro-persona'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
 
})
export class HomePage {  
  constructor(public navCtrl: NavController) {    
      
  }
    irMenuOpp()
    {
      this.navCtrl.push(MenuOpcionesPage); 
    }
    registro(){
      this.navCtrl.push(RegistroPersonaPage);
    }
}
