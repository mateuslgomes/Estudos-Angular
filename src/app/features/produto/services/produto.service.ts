import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto, Produtos } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produtos> {
    return this.http.get<Produtos>(`${this.baseUrl}/produtos`);
  }

  getProdutoById(id: string): Observable<Produto> {
    return this.http.get<Produto>(`${this.baseUrl}/produtos/${id}`);
  }

  atualizarProduto(produto : Produto): Observable<any> {
    return this.http.put(`${this.baseUrl}/produtos/${produto.id}`, produto);
  }

}
