import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ReservasService } from 'src/app/api/reservas.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-sala-uso-multiple',
  templateUrl: './sala-uso-multiple.page.html',
  styleUrls: ['./sala-uso-multiple.page.scss'],
})
export class SalaUsoMultiplePage implements OnInit {
  fecha:string="";
  hora:string="";
  nro_invitados:string="";
  reserva:any;

  constructor(private router: Router,public alertController: AlertController,private service:ReservasService) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Reserva-Aviso',
      subHeader: '',
      message: 'Todos los campos del formulario son necesarios para continuar',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    //console.log('onDidDismiss resolved with role', role);
  }

  async confirmAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Reserva',
      subHeader: '',
      message: 'Se registro la reserva correctamente',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigate(['/reservas']);
        }
      }]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  registrarSalaMultiple(){

    if(this.fecha=="" || this.hora=="" || this.nro_invitados==""){
      this.presentAlert();
    }else{
      
      const formDataReserva = new FormData()
      formDataReserva.append("reservaN","sala-multiple");
      formDataReserva.append("fecha",this.fecha);
      formDataReserva.append("hora",this.hora);
      formDataReserva.append("nro_invitados",this.nro_invitados);

      this.service.registrar("reservas",formDataReserva).
      subscribe(
        (res)=>{
          let respuesta:any=res.respuesta;
          if(respuesta==true || respuesta=="true"){
            this.confirmAlert();
            //this.router.navigate(['/reservas']);
          }
        }
        
      );
        
      

    }
    
  }
}
