import { Component, OnInit, HostBinding } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { ModeloEvento } from '../modelos/modeloEvento';  

@Component({
  selector: 'app-cu-eventos',
  templateUrl: './cu-eventos.component.html',
  styleUrls: ['./cu-eventos.component.css']
})
export class CuEventosComponent implements OnInit {
  @HostBinding('class') clases = 'row';

  Evento: ModeloEvento = {
    
    id_evento: 0,
    id_proceso: 0,    
    anotacion: '',
    fecha_evento: '',
    documento: ''
  };

  datos :any =[];
  edit: boolean = false;
  title: string="Agregar";

  constructor(private Productoservice: ProductosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const params = this.activatedRoute.snapshot.params;

    if(params['id']){
      this.Productoservice.GetEventoById(params['id'])
      .subscribe(
        res=>{
          console.log(res);
          this.Evento = res;
          this.edit = true;
          this.title="Actualizar";
        },
        err => console.error(err)   
      )
    }
  }
    lista(){
      this.Productoservice.ListaEventos().subscribe(
        res =>{
          this.datos = res;
        },
        err => console.log(err)
      );
  }
  
    salvar (){
      delete this.Evento.id_evento;
      this.Productoservice.SalvarEvento(this.Evento)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/listaEventos']);
        },
        err => console.error(err)
      )
  }

  actualizar():void{
    this.Productoservice.EditarEvento(this.Evento.id_evento,this.Evento)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/listaEventos']);
      },
      err => console.error(err)
    )
  }


}
