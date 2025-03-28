import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive',
  imports: [NgIf,NgFor,NgClass,FormsModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {

  flag: boolean = false;  

  isDivVisible(val: boolean) {
    this.flag = val;  
  }

  cityList:string []= ["Pune","Lucknow","Barabanki"];
  data:any [] = [
    {name:"Tanuja",section:"1",year:"3",active:"true"},
    {name:"Tanuja",section:"1",year:"3",active:"false"},
    {name:"Tanuja",section:"1",year:"3",active:"true"},
    {name:"Tanuja",section:"1",year:"3",active:"false"},
    {name:"Tanuja",section:"1",year:"3",active:"true"}
  ]
  studentdiv = "bg-success";
  studentdynamicdiv = "bg-success"

  ischeck:boolean=false;
  
}
