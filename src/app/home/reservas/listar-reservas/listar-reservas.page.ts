import { Component, OnInit } from '@angular/core';
import { ReservasService } from 'src/app/api/reservas.service';
@Component({
  selector: 'app-listar-reservas',
  templateUrl: './listar-reservas.page.html',
  styleUrls: ['./listar-reservas.page.scss'],
})

export class ListarReservasPage implements OnInit {
  reservas:any;

  constructor(private service:ReservasService) { }

  ngOnInit() {
    const formDataReserva = new FormData()
    formDataReserva.append("reservaN","listar");
      
      this.service.listar("reservas",formDataReserva).
      subscribe(
        (res)=>{
          this.reservas=res;
        }
        
      );
  }

}
