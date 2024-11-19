import { Component, OnInit, HostBinding } from '@angular/core';
import { ModeloProceso } from '../modelos/modeloProceso';
import { ProductosService } from '../servicios/productos.service';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-cu-proceso',
  templateUrl: './cu-proceso.component.html',
  styleUrls: ['./cu-proceso.component.css']
})


export class CuProcesoComponent implements OnInit {
  @HostBinding('class') clases = 'row';

  Proceso: ModeloProceso = {
    id_proceso: 0,
    id_cliente: "",
    id_abogado: "",
    estado_actual: '',
    id_radicado: "",
    fecha_creacion: '',
    fecha_asignacion: '',
    categoria_proc: "",
    id_evento: ""
  }

  datos :any =[];
  edit: boolean = false;
  title: string="Agregar";

  constructor(private Productoservice: ProductosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
   
    if(params['id']){
      this.Productoservice.GetProcesoById(params['id'])
      .subscribe(
        res=>{
          console.log(res);
          this.Proceso = res;
          this.edit = true;
          this.title="Actualizar";
        },
        err => console.error(err)   
      )
    }


  }

  lista(){
    this.Productoservice.ListaProcesos().subscribe(
      res =>{
        this.datos = res;
      },
      err => console.log(err)
    );
}

salvar(){
  delete this.Proceso.id_proceso;
  this.Productoservice.SalvarProceso(this.Proceso)
  .subscribe(
    res => {
      console.log(res);
      this.router.navigate(['/listaCP']);
    },
    err => console.error(err)
  )
}

actualizar():void{
  this.Productoservice.EditarProceso(this.Proceso.id_proceso,this.Proceso)
  .subscribe(
    res => {
      console.log(res);
      this.router.navigate(['/listaCP']);
    },
    err => console.error(err)
  )
}



  }


