import { Routes } from '@angular/router';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { DirectiveComponent } from './component/directive/directive.component';
import { VariablesComponent } from './component/variables/variables.component';
import { TemplateFormComponent } from './component/template-form/template-form.component';
import { ApiCallComponent } from './component/api-call/api-call.component';
import { UserComponent } from './component/user/user.component';
import { UserReactiveComponent } from './component/user-reactive/user-reactive.component';
import { ResourceApiComponent } from './component/resource-api/resource-api.component';
import { PipeComponent } from './component/pipe/pipe.component';
import { LoginAdminComponent } from './component/login-admin/login-admin.component';
import { ParentLoginAdminComponent } from './component/parent-login-admin/parent-login-admin.component';
import { isuserLoginGuard } from './guard/isuser-login.guard';

// it is just an object yha pe sare component ko rout krte h
export const routes: Routes = [
    {
        path:'',
        redirectTo:'login-admin',
        // The pathMatch property in Angular routing defines how the router should match the URL with the specified path. It determines whether the entire URL or just the beginning should be matched.
        pathMatch:'full'
    },
    {
        path:'login-admin',
        component:LoginAdminComponent
    },
    {
        path:'',
        component:ParentLoginAdminComponent,
        //implemet guard 
        canActivate:[isuserLoginGuard],
        //jb user login krlega to parent-login-admin yani navbar dikhega and jitne bhi 
        //component hai vo navbar ke neeche dikhenge
        children:[
            {
                path:'data-binding',  //jb is button pe click ho to databinding componenet render ho jaye
                component:DataBindingComponent,
                
                
            },
            {
                path:'directive',  
                component:DirectiveComponent,
                
            },
            {
                path:'variables',
                component:VariablesComponent
            },
            {
                path:'template-form',
                component:TemplateFormComponent
            },
            {
                path:'api-call',
                component:ApiCallComponent
            },
            {
                path:"user",
                component:UserComponent
            },
            {
                path:"user-reactive",
                component:UserReactiveComponent
            },
        
            {
                path:"resource-api",
                component:ResourceApiComponent
            },
            {
                path:"pipe",
                component:PipeComponent
            }
        ]
    }
    
];
