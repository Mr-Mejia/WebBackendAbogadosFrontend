import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';


@Component({
  selector: 'app-lista-procesos',
  templateUrl: './lista-procesos.component.html',
  styleUrls: ['./lista-procesos.component.css']
})
export class ListaProcesosComponent implements OnInit {

 
  datos :any =[];

  constructor(private ProductoServicio: ProductosService ) { }
  ngOnInit(): void {
 
    this.lista();
  }

  
  lista(){
    this.ProductoServicio.ListaProcesos().subscribe(
      res =>{
        this.datos = res;
      },
      err => console.log(err)
    );
  }

}
