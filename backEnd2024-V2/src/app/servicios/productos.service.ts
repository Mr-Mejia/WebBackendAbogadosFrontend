import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Modelo } from '../modelos/modelo';
import { ModeloAbogado } from '../modelos/modeloAbogado';
import { ModeloCE } from '../modelos/modeloCE';
import { ModeloCP } from '../modelos/modeloCP';
import { ModeloCliente } from '../modelos/modeloCliente';
import { ModeloEvento } from '../modelos/modeloEvento';
import { ModeloProceso } from '../modelos/modeloProceso';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private API_URI = "http://localhost:8081";
  

  constructor(private http: HttpClient) { }


/***********************LISTAR LOS REGISTROS*******************/

  ListaProductos(){
    return  this.http.get(`${this.API_URI}/api/productos`);
  }
  ListaAbogados(){
    return  this.http.get(`${this.API_URI}/api/abogado`);
  }
  ListaProcesos(){
    return  this.http.get(`${this.API_URI}/api/proceso`);
  }
  ListaClientes(){
    return  this.http.get(`${this.API_URI}/api/cliente`);
  }
  ListaCategoriaEmpleados(){
    return  this.http.get(`${this.API_URI}/api/categoriaempleado`);
  }
  ListaEventos(){
    return  this.http.get(`${this.API_URI}/api/evento`);
  }
  ListaCategoriaProcesos(){
    return  this.http.get(`${this.API_URI}/api/categoriaprocesos`);
  }

/*******************************MÉTODOS SALVAR*********************************************/

  SalvarProductos(modelo: Modelo) {
    return this.http.post(`${this.API_URI}/clientes`, modelo);
  }
  SalvarAbogado(ModeloAbogado: ModeloAbogado) {
    return this.http.post(`${this.API_URI}/enviarA`, ModeloAbogado);
  }
  SalvarCategoriaProceso(ModeloCP: ModeloCP) {
    return this.http.post(`${this.API_URI}/enviarCP`, ModeloCP);
  }
  SalvarCategoriaEmpleado(ModeloCE: ModeloCE) {
    return this.http.post(`${this.API_URI}/enviarCE`, ModeloCE);
  }
  SalvarCliente(ModeloCliente: ModeloCliente) {
    return this.http.post(`${this.API_URI}/enviarC`, ModeloCliente);
  }
  SalvarEvento(ModeloEvento: ModeloEvento) {
    return this.http.post(`${this.API_URI}/enviarE`, ModeloEvento);
  }
  SalvarProceso(ModeloProceso: ModeloProceso) {
    return this.http.post(`${this.API_URI}/enviarP`, ModeloProceso);
  }

/********************************MÉTODOS BORRAR*************************************/

  BorrarAbogado(id:string) {
  return this.http.delete(`${this.API_URI}/borrarA/${id}`);
  }
  BorrarCategoriaProceso(id:string) {
    return this.http.delete(`${this.API_URI}/borrarCP/${id}`);
    }
  BorrarCategoriaEmpleado(id:string) {
    return this.http.delete(`${this.API_URI}/borrarCE/${id}`);
  }
  BorrarCliente(id:string) {
    return this.http.delete(`${this.API_URI}/borrarC/${id}`);
  }
  BorrarEvento(id:string) {
    return this.http.delete(`${this.API_URI}/borrarE/${id}`);
  }
  BorrarProceso(id:string) {
    return this.http.delete(`${this.API_URI}/borrarP/${id}`);
  }

  /*******************************MÉTODOS OBTENER POR ID*************************************/

  GetAbogadoById(id:string){
    return  this.http.get(`${this.API_URI}/api/getAbogado/${id}`);
  }

  GetCategoriaProcesoById(id:string){
    return  this.http.get(`${this.API_URI}/api/getCP/${id}`);
  }
  GetCategoriaEmpleadoById(id:string){
    return this.http.get(`${this.API_URI}/api/getCE/${id}`);
  }
  GetClienteById(id:string) {
    return this.http.get(`${this.API_URI}/api/getCliente/${id}`);
  }
  GetEventoById(id:string) {
    return this.http.get(`${this.API_URI}/api/getEvento/${id}`);
  }
  GetProcesoById(id:string) {
    return this.http.get(`${this.API_URI}/api/getProceso/${id}`);
  }
  GetEventoByIdProceso(id:string) {
    return this.http.get(`${this.API_URI}`)
  }
  
  /*******************************MÉTODOS EDITAR*************************************/
  EditarAbogado(id: any, ModeloAbogado: any): Observable<any> {
    return this.http.put(`${this.API_URI}/editarA/${id}`,ModeloAbogado);
  }
  EditarCatEmp(id: any, ModeloCE: any): Observable<any> {
    return this.http.put(`${this.API_URI}/editarCE/${id}`,ModeloCE);
  }
  EditarCliente(id: any, ModeloCliente: any): Observable<any> {
    return this.http.put(`${this.API_URI}/editarC/${id}`, ModeloCliente);
  }
  EditarEvento(id: any, ModeloEvento: any): Observable<any> {
    return this.http.put(`${this.API_URI}/editarE/${id}`, ModeloEvento);
  }
  EditarProceso(id: any, ModeloProceso: any): Observable<any> {
    return this.http.put(`${this.API_URI}/editarP/${id}`, ModeloProceso);
  }
  EditarCatProc(id: any, ModeloCP: any): Observable<any> {
    return this.http.put(`${this.API_URI}/editarCP/${id}`,ModeloCP); 
  }
}
