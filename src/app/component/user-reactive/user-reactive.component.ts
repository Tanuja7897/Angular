import { Component,inject  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './user-reactive.component.html',
  styleUrl: './user-reactive.component.css'
})
export class UserReactiveComponent {
  http = inject(HttpClient);
  userList:any [] = [];
  isSideFormVisible : boolean = false;
  //if above variable is false to hm form nhi dikhayege  yani table ko full length dena chahiye
  

  //reactive form
  userForm : FormGroup = new FormGroup({
    userId: new FormControl(0),
    userName: new FormControl("",[Validators.required , Validators.minLength(3)]),
    emailId: new FormControl(""),
    fullName: new FormControl(""),
    role: new FormControl(""),
    createdDate: new FormControl(new Date()),
    password: new FormControl(""),
    projectName: new FormControl(""),
    refreshToken: new FormControl(""),
    refreshTokenExpiryTime: new FormControl (new Date()),
  })
  constructor(){
    this.getUser();
  }
  getUser(){
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetAllUsers").subscribe((res:any)=>{
        this.userList = res.data ;
    })
  }
  toggleForm(){
    //true hai to false ho jayega false hai to true
    this.isSideFormVisible = !this.isSideFormVisible
  }
  onSave(){
    //api ko direct value chahiye obj ke form me but hmare ps form hai to uski value pass kr skte h
    const formValue = this.userForm.value ;
    
    this.http.post('https://projectapi.gerasim.in/api/Complaint/AddNewUser', formValue).subscribe((res : any)=>{
      // taki post request jaye and table me data print dikhe hmne
      this.getUser();
  })
  }
}
