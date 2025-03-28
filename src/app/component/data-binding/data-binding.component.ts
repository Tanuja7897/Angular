import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  coursename:string = "Tanuja";
  //funtion
  showAlert(){
    alert("this is event ")
  }
  //message with parameter
  showDynamicAlert(msg:string){
    alert(msg)
  }
}
