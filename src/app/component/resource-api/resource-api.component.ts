import { HttpClient } from '@angular/common/http';
import { Component , resource ,inject} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-resource-api',
  imports: [],
  templateUrl: './resource-api.component.html',
  styleUrl: './resource-api.component.css'
})
export class ResourceApiComponent {
  //only accept promise kind of data 
  userListResource = resource({
    loader:()=>{
      return fetch('https://projectapi.gerasim.in/api/Complaint/GetAllUsers').then((res)=>
        
        res.json() as Promise<any []>
        //res ko json me parse krke usko array me store krvana 
      )
    }
  });
  //does not need to provide promise kind of data can also accept obserable data
  http = inject(HttpClient);
  userList = rxResource({
    loader:()=>{
      return this.http.get("https://projectapi.gerasim.in/api/Complaint/GetAllUsers")
    }
  })
  
}
