import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/shared/models/usuarioModel';
import  Swal  from 'sweetalert2';
import { AuthService } from '../../shared/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel =  new UsuarioModel();
  recordar=false;

  constructor(private auth:AuthService, private router:Router) { }

 

  ngOnInit(): void {
  }

  login(form:NgForm) {
    
    

    if (form.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor'
    });

    Swal.showLoading();
    
    this.auth.login(this.usuario).subscribe((resp: any)=>{
      console.log(resp);
      Swal.close();
      
      if (this.recordar) {
        localStorage.setItem('email',this.usuario.email);
      }

      this.router.navigateByUrl('home')
    }, err=>{
      console.log(err.error.error.message);
      Swal.fire({
        icon: 'error',
        title: 'error al autenticar',
        text: err.error.error.message
      });
    })
    
  }

}
