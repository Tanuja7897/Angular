import { Routes } from '@angular/router';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { DirectiveComponent } from './component/directive/directive.component';
import { VariablesComponent } from './component/variables/variables.component';
import { TemplateFormComponent } from './component/template-form/template-form.component';

// it is just an object yha pe sare component ko rout krte h
export const routes: Routes = [
    {
        path:'data-binding',  //jb is button pe click ho to databinding componenet render ho jaye
        component:DataBindingComponent
    },
    {
        path:'directive',  
        component:DirectiveComponent
    },
    {
        path:'variables',
        component:VariablesComponent
    },
    {
        path:'template-form',
        component:TemplateFormComponent
    }
];
