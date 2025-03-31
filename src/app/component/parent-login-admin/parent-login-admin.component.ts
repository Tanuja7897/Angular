import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-parent-login-admin',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './parent-login-admin.component.html',
  styleUrl: './parent-login-admin.component.css'
})
export class ParentLoginAdminComponent {
  router = inject(Router)
  lockedUserName:string = '';
    constructor(){
      const islockedUser = localStorage.getItem("User");
      if(islockedUser){
          this.lockedUserName = islockedUser;
      }
    }
    logOut(){
      //local storage se data htao and 
      //redirect krdo login-page pe
      localStorage.removeItem('User')
      this.router.navigate(['/login-admin'])
    } 
}
