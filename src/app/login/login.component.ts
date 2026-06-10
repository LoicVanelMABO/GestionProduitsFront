import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../model/user.module';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {
  constructor(private authService : AuthService, private router : Router){}
  user = new User;
  error : number =0;

  onLoggedIn(){
    console.log(this.user);
    let isValidUser: Boolean = this.authService.signIn(this.user);
    
    if(isValidUser){
      this.router.navigate(['/']);
    }else{
      this.error = 1;
      //alert('Logi ou mot de passe incorrecte');
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Login ou mot de passe incorrecte!",
        //footer: "<a href=\"#\">Why do I have this issue?</a>"
      });
    }
  }

}
