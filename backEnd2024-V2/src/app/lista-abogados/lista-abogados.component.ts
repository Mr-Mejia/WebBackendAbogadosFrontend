import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-lista-abogados',
  templateUrl: './lista-abogados.component.html',
  styleUrls: ['./lista-abogados.component.css']
})
export class ListaAbogadosComponent implements OnInit {

  
  datos :any =[];

  constructor(private ProductoServicio: ProductosService ) { }
  ngOnInit(): void {
 
    this.lista();
  }

  
  lista(){
    this.ProductoServicio.ListaAbogados().subscribe(
      res =>{
        this.datos = res;
      },
      err => console.log(err)
    );
  }


}
