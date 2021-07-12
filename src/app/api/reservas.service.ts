import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ReservasService {
  //urlBase:string="http://localhost/auxo/apis/";
  urlBase:string="http://devtecsolutionsperu.com/apiApp/";
  constructor(private http: HttpClient) { }

  registrar(api,reserva){
    
    return this.http.post<any>(this.urlBase+api+".php",reserva);
    
  }

  listar(api,reserva){
    return this.http.post<any>(this.urlBase+api+".php",reserva);
  }
}
