import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
    userForm:any = {
      email:"",
      password:"",
      address:"",
      address2:"",
      city:"",
      state:"",
      zip:""
    }
    // getting input from form
    onSaveUser(){
      const fromVal = this.userForm
      
    }
}
