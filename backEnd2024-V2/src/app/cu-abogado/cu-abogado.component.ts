import { Component, OnInit, HostBinding } from '@angular/core';
import { ModeloAbogado } from '../modelos/modeloAbogado';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { ProductosService } from '../servicios/productos.service';


@Component({
  selector: 'app-cu-abogado',
  templateUrl: './cu-abogado.component.html',
  styleUrls: ['./cu-abogado.component.css']
})
export class CuAbogadoComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  //Este modelo funciona solo cuando envío datos
  Abogado : ModeloAbogado = {
    id_abogado :  0,
    cedula_abo : '',
    nombre_abo : '',
    apellido_abo :  '',
    id_categoria_emp :  '',
    estado_abo :  '',
    fecha_ingreso : '',
    fecha_retiro :  ''
  }

  datos :any =[];
  edit: boolean = false;
  title: string="Agregar";
  

  constructor(private Productoservice: ProductosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const params = this.activatedRoute.snapshot.params;

    if(params['id']){
      this.Productoservice.GetAbogadoById(params['id'])
      .subscribe(
        res=>{
          console.log(res);
          this.Abogado = res;
          this.edit = true;
          this.title="Actualizar";
        },
        err => console.error(err)   
      )
    }
  }

  lista(){
    this.Productoservice.ListaAbogados().subscribe(
      res =>{
        this.datos = res;
      },
      err => console.log(err)
    );
}



  salvar(){
    delete this.Abogado.id_abogado;
    this.Productoservice.SalvarAbogado(this.Abogado)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/listaAbogados']);
      },
      err => console.error(err)
    )
  } 

  actualizar():void{
    this.Productoservice.EditarAbogado(this.Abogado.id_abogado,this.Abogado)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/listaAbogados']);
      },
      err => console.error(err)
    )
  }

}
