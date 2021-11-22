import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../shared/model/cliente';
import { ClienteService } from '../../shared/services/cliente.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }
  listaClientes: Cliente[]=[];

  precede: any = {'M':'Masculino', 'F':'Femenino'}


  ngOnInit(): void {
    this.prueba()
  }


  public prueba(){
    this.clienteService.getAll().subscribe((data:any)=>{
      this.listaClientes=data;
      this.listaClientes.forEach((element:any) => {
        console.log(element.nombre);
      });
      
    }, err => console.error('errrrrsss',err));
    
  }

}
