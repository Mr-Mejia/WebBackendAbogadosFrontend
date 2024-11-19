import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-categoria-proceso',
  templateUrl: './lista-categoria-proceso.component.html',
  styleUrls: ['./lista-categoria-proceso.component.css']
})
export class ListaCategoriaProcesoComponent implements OnInit {

  datos: any= [];

  constructor(private ProductoServicio: ProductosService, private router: Router ) { }
  ngOnInit(): void {
 
    this.lista();
  }

  
  lista(){
    this.ProductoServicio.ListaCategoriaProcesos().subscribe(
      res =>{
        this.datos = res;
      },
      err => console.log(err)
    );
  }

  borrar(id:any) {
    this.ProductoServicio.BorrarCategoriaProceso(id).subscribe(
      res => {
        console.log(res);
        
        this.router.navigate(['/listaCategoriaProceso']);
        this.lista();
      },
      err => console.log(err)
    );
  }



}
