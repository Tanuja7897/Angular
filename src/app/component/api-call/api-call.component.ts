import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-api-call',
  imports: [],
  templateUrl: './api-call.component.html',
  styleUrl: './api-call.component.css'
})
export class ApiCallComponent {
  http = inject(HttpClient);
  storeApiResponse:any[]=[];
  getAllUsers(){
    this.http.get("https://dummyjson.com/users").subscribe((res:any)=>{
      
      this.storeApiResponse=res.users;
    });
  }
}
