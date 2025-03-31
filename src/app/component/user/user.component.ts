import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  http = inject(HttpClient);
  userList:any [] = [];
  //i want to send this data with my api
  userObj : any = {
    "userId":"0",
    "userName": "",
    "emailId": "",
    "fullName": "",
    "role": "",
    "createdDate": new Date(),
    "password": "",
    "projectName": "",
    "refreshToken": "",
    "refreshTokenExpiryTime": new Date(),
  }
  constructor(){
    this.getUser();
  }
  getUser(){
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetAllUsers").subscribe((res:any)=>{
        this.userList = res.data ;
    })
  }
  hitPostApi(){
    this.http.post('https://projectapi.gerasim.in/api/Complaint/AddNewUser',this.userObj).subscribe((res : any)=>{
      // taki post request jaye and table me data print dikhe hmne
      this.getUser();
    })
  }
  //jb user edit button pe click kre 
  //to use ye data form pe dikh jaye 
  //tabhi to edit kr payega
  //and edit hone ke bad database me bhi edit krna h
  onEdit(data:any){
    this.userObj = data
  }
  hitPutApi(){
    //generally updation ke liye put use hota h but api us format me nhi thi isliye hmne post use kiya h
    this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateUser",this.userObj).subscribe((resizeBy:any)=>{
      this.getUser();
    })
  }
  onDelete(data:any){
    //inbuild confirm function of js
    const isconfirm = confirm("Are you sure to delete this record!")
    if(isconfirm){
      this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeleteUserByUserId?userId="+data).subscribe((item:any)=>{
        this.getUser();
      })
    }
    
  }
}