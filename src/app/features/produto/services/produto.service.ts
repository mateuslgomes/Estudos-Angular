import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private baseUrl = 'https://viacep.com.br/ws/20931002/json';

  constructor(private http: HttpClient) { }

  getCidadePeloCep() {
    return this.http.get(this.baseUrl);
  }

}
