import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { Modelo } from '../modelos/modelo';
import { ModeloCE } from '../modelos/modeloCE';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-ce',
  templateUrl: './lista-ce.component.html',
  styleUrls: ['./lista-ce.component.css']
})
export class ListaCEComponent implements OnInit {


  modelo: ModeloCE = {
    id_categoria_emp: 0,
    nombre_cat_emp: '',
    estado_cat_emp: '',
    privilegio: '',
  };
  datos: any = [];



  constructor(private ProductoServicio: ProductosService, private router: Router) { }
  ngOnInit(): void {

    this.lista();
  }


  lista() {
    this.ProductoServicio. ListaCategoriaEmpleados().subscribe(
      res => {
        this.datos = res;
      },
      err => console.log(err)
    );
  }

  borrar(id:any) {
    this.ProductoServicio.BorrarCategoriaEmpleado(id).subscribe(
      res => {
        console.log(res);
        
        this.router.navigate(['/listaCE']);
        this.lista();
      },
      err => console.log(err)
    );
  }

}
