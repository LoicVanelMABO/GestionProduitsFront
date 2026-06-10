import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public authService:AuthService, private router: Router){}
  title = 'MesProduits';

  ngOnInit(){
    let isloggedIn: string | null;
    let loggedUser: string | null;

    isloggedIn = localStorage.getItem('isloggedIn');
    loggedUser = localStorage.getItem('loggedUser');

    if(isloggedIn!="true" || !loggedUser){
      this.router.navigate(['/login']);
    }
  }
  
  logOut(){
    this.authService.logout();
  }
}
