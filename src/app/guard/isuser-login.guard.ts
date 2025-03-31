//phle ye service thi but ab ye arrow fun hai ye anguler 16 se arrow function aya tha
import { CanActivateFn,Router } from '@angular/router';
import { inject } from '@angular/core'; 
export const isuserLoginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoged = localStorage.getItem("User")
  if(isLoged != null){
    return true;
  }
  else{
    router.navigate(['/login-admin'])
    return false
  }
    
};
//now jao routing file me and add kro ki kaon se kaon se path ko guard krna h
