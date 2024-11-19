import { Component, OnInit, HostBinding } from '@angular/core';
import { ModeloCP } from '../modelos/modeloCP';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-cu-categoria-proceso',
  templateUrl: './cu-categoria-proceso.component.html',
  styleUrls: ['./cu-categoria-proceso.component.css']
})
export class CuCategoriaProcesoComponent implements OnInit {
  @HostBinding('class') clases = 'row';

  CategoriaProc: ModeloCP = {
    categoria_proc: 0,
    id_proceso: 0,
    descripcion: '',
    estado_cat_pro: ''
  }
  datos: any = [];
  edit: boolean = false;
  title: string="Agregar";

  constructor(private Productoservice: ProductosService, private router: Router, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Productoservice.GetCategoriaProcesoById(params['id'])
        .subscribe(
          res => {
            console.log(res);
            this.CategoriaProc = res;
            this.edit = true;
            this.title="Actualizar";
          },
          err => console.error(err)
        )
    }
  }
  lista() {
    this.Productoservice.ListaCategoriaProcesos().subscribe(
      res => {
        this.datos = res;
      },
      err => console.log(err)
    )
  }

  salvar() {
    delete this.CategoriaProc.categoria_proc;
    this.Productoservice.SalvarCategoriaProceso(this.CategoriaProc)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/listaCategoriaProceso']);
        },
        err => console.error(err)
      )


  };

  actualizar(): void {
    this.Productoservice.EditarCatProc(this.CategoriaProc.categoria_proc, this.CategoriaProc)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/listaCategoriaProceso']);
        },
        err => console.error(err)
      )
  }

}


