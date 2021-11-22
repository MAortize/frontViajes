import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const URL = environment.endPointCliente;

@Injectable()
export class ClienteService {

  constructor(private http: HttpClient) { 
    console.log('sirve');
    
  }


  public getAll(){
    return this.http.get(URL)
  }




}
