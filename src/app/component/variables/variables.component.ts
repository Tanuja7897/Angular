import { Component } from '@angular/core';

@Component({   //decorator
  selector: 'app-variables', //name of the component
  imports: [],  //kya kya import krna h
  templateUrl: './variables.component.html', //html files
  styleUrl: './variables.component.css' // css file
})
export class VariablesComponent {
  //primitive datatypes
  //string number date boolean
  firstname : string = "Tanuja"
  //or we can do thus by construnctir
  lastname:string ;
  constructor(){
    this.lastname = "Vish"
  }
  //date
  currentdate : Date = new Date();//--give you current date of your machine 
 //any 
 val : any = "tanuja";//kuch bhi store kr skte h yha
}
