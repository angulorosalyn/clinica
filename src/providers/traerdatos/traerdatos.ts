import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TraerdatosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TraerdatosProvider {

  api:string="http://localhost/citasmedicas/";
  data:any=[{nombre:'haner',apellido:'riascos'},{nombre:'haner',apellido:'riascos'}];
  data2:any;
  constructor(public http: Http) {
    console.log('Hello TraerdatosProvider Provider');
  }

  getespecialidad(){
   
   return this.http.get('http://localhost/citasmedicas/especialidad.php').map(res=>res.json());
  }

  getmedicoespecilista(id){
    ///console.log(this.http.get('https://jsonplaceholder.typicode.com/posts').map(res=>res.json()));
    return this.http.get(this.api+'medicos.php?especialidad='+id).map(res=>res.json());
   }

   getdiagendamedico(idmedico){
    ///console.log(this.http.get('https://jsonplaceholder.typicode.com/posts').map(res=>res.json()));
    return this.http.get(this.api+'agendamedica.php?idmedico='+idmedico).map(res=>res.json());
   }

   horaioMedico(idmedico,dia){
    ///console.log(this.http.get('https://jsonplaceholder.typicode.com/posts').map(res=>res.json()));
    return this.http.get(this.api+'horariomedico.php?idmedico='+idmedico+'&dia='+dia).map(res=>res.json());
   }

   resgistrarReserva(idagenda,id){
    ///console.log(this.http.get('https://jsonplaceholder.typicode.com/posts').map(res=>res.json()));
   // return this.http.get(this.api+'resgistroReserva.php?idpaciente='+idpaciente+'&idagenda='+idagenda).map(res=>res.json());
    return this.http.get(this.api+'resgistrarReseva.php?cedula='+id+'&idagenda='+idagenda);
    
  }

  logueo(doc){
    return this.http.get(this.api+'buscarusuario.php?documentoPersona='+doc).map(res=>res.json());
    }

    verReservas(idpaciente){
      return this.http.get(this.api+'verreservas.php?idpaciente='+idpaciente).map(res=>res.json());
      
    }

}
