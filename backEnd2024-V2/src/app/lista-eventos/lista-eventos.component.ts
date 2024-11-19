import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.css']
})
export class ListaEventosComponent implements OnInit {
  
  datos :any =[];
  filterList: boolean = false;

  constructor(private ProductoServicio: ProductosService, private activatedRoute: ActivatedRoute  ) { }
  ngOnInit(): void {
 
    this.lista();
  }

  
  lista(){
    this.ProductoServicio.ListaEventos().subscribe(
      res =>{
        this.datos = res; 
        const params = this.activatedRoute.snapshot.params;
        if(params['id']){
          this.filterList = true;
          this.datos = this.datos.filter((e: { id_proceso: any; }) => e.id_proceso == params['id']);
        }
      },
      err => console.log(err)
    );
  }

}
