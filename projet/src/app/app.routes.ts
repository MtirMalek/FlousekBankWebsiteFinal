import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login/login.component';
import { RegisterComponent } from './pages/register/register/register.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password/forget-password.component';
import { ResetComponent } from './pages/reset/reset/reset.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'forget-password', component:ForgetPasswordComponent},
    {path:'reset/:token',component:ResetComponent}


];
