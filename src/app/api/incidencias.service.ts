import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {
  //urlBase:string="http://localhost/auxo/apis/";
  urlBase:string="http://devtecsolutionsperu.com/apiApp/";
  constructor(private http: HttpClient) { }

  registrar(api,incidencia){
    
    return this.http.post<any>(this.urlBase+api+".php",incidencia);
    
  }

  listar(api,incidencia){
    return this.http.post<any>(this.urlBase+api+".php",incidencia);
  }
}
