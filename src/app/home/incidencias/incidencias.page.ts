import { Component, OnInit } from '@angular/core';
import { IncidenciasService } from 'src/app/api/incidencias.service';
import { AlertController } from '@ionic/angular';
import { Router } from "@angular/router"

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.page.html',
  styleUrls: ['./incidencias.page.scss'],
})
export class IncidenciasPage implements OnInit {
  fecha:string="";
  hora:string="";
  asunto:string="";
  detalle:string="";
  reserva:any;

  constructor(private router: Router,public alertController: AlertController,private service:IncidenciasService) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Incidencia-Aviso',
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
      header: 'Incidencia',
      subHeader: '',
      message: 'Se registro la incidencia correctamente',
      buttons: [{
        text: 'OK',
        handler: () => {
          //this.router.navigate(['/inicio']);
        }
      }]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  registrarIncidencia(){

    if(this.fecha=="" || this.hora=="" || this.asunto=="" || this.detalle==""){
      this.presentAlert();
    }else{
      
      const formDataIncidencia = new FormData()
      formDataIncidencia.append("incidenciaN","incidencia");
      formDataIncidencia.append("fecha",this.fecha);
      formDataIncidencia.append("hora",this.hora);
      formDataIncidencia.append("asunto",this.asunto);
      formDataIncidencia.append("detalle",this.detalle);

      this.service.registrar("incidencias",formDataIncidencia).
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
