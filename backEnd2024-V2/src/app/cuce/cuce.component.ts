import { Component, HostBinding, OnInit } from '@angular/core';
import { ModeloCE } from '../modelos/modeloCE';
import { ProductosService } from '../servicios/productos.service';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-cuce',
  templateUrl: './cuce.component.html',
  styleUrls: ['./cuce.component.css']
})

export class EnvioCEComponent implements OnInit {
  @HostBinding('class') clases = 'row';

  CategoriaE: ModeloCE = {
    
    id_categoria_emp:0,
    nombre_cat_emp:'',
    estado_cat_emp:'',
    privilegio: ''
  };

  datos :any =[];
  edit: boolean = false;
  title: string="Agregar";

  constructor(private Productoservice: ProductosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const params = this.activatedRoute.snapshot.params;
    if(params['id']){
      this.Productoservice.GetCategoriaEmpleadoById(params['id'])
      .subscribe(
        res=>{
          console.log(res);
          this.CategoriaE = res;
          this.edit = true;
          this.title="Actualizar";
        },
        err => console.error(err)   
      )
    }
  }

  lista(){
    this.Productoservice.ListaCategoriaEmpleados().subscribe(
      res =>{
        this.datos = res;
      },
      err => console.log(err)
    );
}

  salvar(){
    delete this.CategoriaE.id_categoria_emp;
    this.Productoservice.SalvarCategoriaEmpleado(this.CategoriaE)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/listaCE']);
      },
      err => console.error(err)
    )
  }

  actualizar():void{
    this.Productoservice.EditarCatEmp(this.CategoriaE.id_categoria_emp,this.CategoriaE)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/listaCE']);
      },
      err => console.error(err)
    )
  }

  
}