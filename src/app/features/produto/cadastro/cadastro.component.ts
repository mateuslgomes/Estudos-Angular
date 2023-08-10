import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../models/produto.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit{
  
  id!: string;
  produto!: Produto;
  rota: string = '';
  isNovoProduto: boolean = false;
  tituloPagina: string = '';

  nome: string = '';
  descricao: string = '';
  preco: string = '';
  estoque: number = 0;
  imagemUrl: string = '';

  constructor(private produtoService: ProdutoService, 
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.rota = this.activatedRoute.snapshot.url[0].path;

    if(this.rota === `editar-produto`) {
      this.id = this.activatedRoute.snapshot.url[1].path;

      this.produtoService.getProdutoById(this.id).subscribe((produto : Produto) => {
        this.produto = produto;
        this.nome = this.produto.nome;
        this.descricao = this.produto.descricao;
        this.preco = this.produto.preco;
        this.estoque = this.produto.estoque;
        this.tituloPagina = `Editar Produto ${produto.nome}`
      })

    } else {
      this.isNovoProduto = true;
      this.tituloPagina = 'Novo Produto';
    }
  } 

  salvarProduto() {
    const produtoParaSalvar = {
      id: parseInt(this.id),
      nome: this.nome,
      preco: this.preco,
      imagemUrl: this.produto.imagemUrl, 
      estoque: this.estoque,
      descricao: this.descricao
    }
  
    this.produtoService.atualizarProduto(produtoParaSalvar).subscribe(response => {
      this.router.navigate(['produtos', 'listagem']);
    })

  }

}
