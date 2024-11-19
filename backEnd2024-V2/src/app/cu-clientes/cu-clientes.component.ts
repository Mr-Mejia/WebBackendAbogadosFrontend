import { Component, OnInit, HostBinding } from '@angular/core';
import { ModeloCliente } from '../modelos/modeloCliente';
import { ProductosService } from '../servicios/productos.service';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-cu-clientes',
  templateUrl: './cu-clientes.component.html',
  styleUrls: ['./cu-clientes.component.css']
})
export class CuClientesComponent implements OnInit {
  @HostBinding('class') clases = 'row';

  Cliente: ModeloCliente = {
    id_cliente: 0,
    id_proceso: 0,
    nombre_cli: '',
    apellido_cli: '',
    cedula_cli: '',
    telefono_cli: '',
    correo_cli: '',
    direccion_cli: ''

  };
  datos :any =[];
  edit: boolean = false;
  title: string="Agregar";


  constructor(private Productoservice: ProductosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const params = this.activatedRoute.snapshot.params;
   
    if(params['id']){
      this.Productoservice.GetClienteById(params['id'])
      .subscribe(
        res=>{
          console.log(res);
          this.Cliente = res;
          this.edit = true;
          this.title="Actualizar";
        },
        err => console.error(err)   
      )
    }
  }

  lista(){
    this.Productoservice.ListaClientes().subscribe(
      res =>{
        this.datos = res;
      },
      err => console.log(err)
    );
}

  salvar(){
    delete this.Cliente.id_cliente;
    this.Productoservice.SalvarCliente(this.Cliente)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/listaClientes']);
      },
      err => console.error(err)
    )
  }

  actualizar():void{
    this.Productoservice.EditarCliente(this.Cliente.id_cliente,this.Cliente).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/listaClientes']);
      },
      err => console.error(err)
    )

}

}
