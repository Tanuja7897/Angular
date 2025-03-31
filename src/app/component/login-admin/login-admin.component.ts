import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-admin',
  imports: [FormsModule],
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css'
})
export class LoginAdminComponent {
    loginObj : UserLogin = new UserLogin();
    //now create reouter that take you automatically on home page when creadiential is correct
    router = inject(Router);
   
    onLogin(){
      //this is hardcode login 
      //we can do this by api 
      //will do that in project
      if(this.loginObj.userName == 'admin' && this.loginObj.password == '123'){
        debugger
          this.router.navigateByUrl('/directive');
          localStorage.setItem("User",this.loginObj.userName)
      }
      else{
        alert("Invalid Crediential")
      }
    }
    //jaise koi user hmare page pe login kre to uski information save krni pdti h browser pe 
    //uske liye 3 medium h
    //1. Session Storage
    //2. Local Storage
    //3. Cookies
    //4. Service
    //inke variable me data store kr skte h
    // ab browser ui pe dikahan h ki kaon s user login hai 
    //go to parent-admin-login.ts file 

}
export class UserLogin{
  userName:string ;
  password:string;
  constructor(){
    this.userName='';
    this.password='';
  }
}
