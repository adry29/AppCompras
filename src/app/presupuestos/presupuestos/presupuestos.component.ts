import { Component, OnInit } from '@angular/core';
import { databaseInstanceFactory } from '@angular/fire/database/database.module';


import { PresupuestosService } from 'src/app/servicios/presupuestos.service';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent implements OnInit {


  presupuestos : any[] = [];
  public cargado: boolean=false;
  

  constructor(private presupuestosService : PresupuestosService){
    this.cargado = false;
    this.presupuestosService.getPresupuestos()
    .subscribe(presupuestos => {
     ;
    for ( const id$ in presupuestos) {
    const p = presupuestos[id$];
    p.id$ = id$;
    this.presupuestos.push(presupuestos[id$]);
    }
    this.cargado = true;
    });

    
  }

  ngOnInit(): void {

    
  }

  
  eliminarPresupuesto(id$: string) {
    this.presupuestosService.delPresupuesto(id$)
      .subscribe(res => {
        this.presupuestos = [];
        this.presupuestosService.getPresupuestos()
          .subscribe(presupuestos => {
            
            for (const id$ in presupuestos) {
              const p = presupuestos[id$];
              p.id$ = id$;
              this.presupuestos.push(presupuestos[id$]);
              
            }
          })
      });
      if(this.presupuestos.length > 1){
      window.location.reload();}
  }

}
