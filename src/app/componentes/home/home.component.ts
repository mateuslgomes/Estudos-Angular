import { Component } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { HomeService } from 'src/app/components/services/home.service';

export interface Ciente {
  nome: string;
  idade: number;
  sexo: string;
  salario: number;
} 

export interface Cliente extends Array<Ciente>{}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  clientes: Cliente = [
    {
      'nome': 'Jonas',
      'idade': 25,
      'salario': 3508,
      'sexo': 'm'
    }, 
    {
      'nome': 'Janaina',
      'idade': 35,
      'salario': 5612,
      'sexo': 'f'
    }, 
    {
      'nome': 'Carla',
      'idade': 23,
      'salario': 2957,
      'sexo': 'f'
    },
    {
      'nome': 'Marcos',
      'idade': 21,
      'salario': 3507,
      'sexo': 'm'
    },
    {
      'nome': 'James',
      'idade': 32,
      'salario': 4501,
      'sexo': 'm'
    },
    {
      'nome': 'Ketlyn',
      'idade': 19,
      'salario': 2300,
      'sexo': 'f'
    }, 
  ]

  displayedColumns: string[] = ['nome', 'idade', 'sexo', 'salario'];
  dataSource !: MatTableDataSource<any>
  
  constructor(private homeService: HomeService) { }
  
  ngOnInit(): void {
    this.homeService.getClientes()
    .subscribe(clientes => {
      this.clientes = clientes;
      this.dataSource= new MatTableDataSource(this.clientes);
    })
  }

}
