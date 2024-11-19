import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {

  private API_URI = 'http://localhost:8080/productos';

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get(`${this.API_URI}`);
  }

}
