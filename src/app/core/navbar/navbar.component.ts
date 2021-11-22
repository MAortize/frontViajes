import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout()
    this.router.navigateByUrl('/auth')
  }

}
