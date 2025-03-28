import { Component, Directive } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { VariablesComponent } from './component/variables/variables.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { DirectiveComponent } from './component/directive/directive.component';

@Component({             //dectator tells about the class written below 
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Learning';
}
