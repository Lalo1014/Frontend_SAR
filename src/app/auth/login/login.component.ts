import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faLock, faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [FontAwesomeModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  faUser = faUser;
  faLock = faLock;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  mostrar = false;

  constructor(private router:Router){}

  iniciarSesion(){
    this.router.navigate(['/home']);
  }

  toggleIcon(){
    this.mostrar = !this.mostrar;
  }
}
