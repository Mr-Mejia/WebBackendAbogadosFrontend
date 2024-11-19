import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { ModeloCliente } from '../modelos/modeloCliente';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {


  
  modelo: ModeloCliente = {
    id_cliente: 0,
    id_proceso: 0,
    nombre_cli: '',
    apellido_cli: '',
    cedula_cli: '',
    telefono_cli: '',
    correo_cli: '',
    direccion_cli: '',
  };
  datos :any =[];

  constructor(private ProductoServicio: ProductosService ) { }
  ngOnInit(): void {
 
    this.lista();
  }

  
  lista(){
    this.ProductoServicio.ListaClientes().subscribe(
      res =>{
        this.datos = res;
      },
      err => console.log(err)
    );
  }

}
