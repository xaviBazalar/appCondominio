import { Component, OnInit } from '@angular/core';
import { IncidenciasService } from 'src/app/api/incidencias.service';

@Component({
  selector: 'app-listar-incidencias',
  templateUrl: './listar-incidencias.page.html',
  styleUrls: ['./listar-incidencias.page.scss'],
})
export class ListarIncidenciasPage implements OnInit {
  incidencias:any;

  constructor(private service:IncidenciasService) { 
    
  }

  ngOnInit() {
    const formDataIncidencia = new FormData()
      formDataIncidencia.append("incidenciaN","listar");
      
      this.service.registrar("incidencias",formDataIncidencia).
      subscribe(
        (res)=>{
          this.incidencias=res;
        }
        
      );
  }

}
