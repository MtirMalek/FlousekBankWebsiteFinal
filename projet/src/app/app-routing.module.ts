import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';

import { DetailsComponent } from './details/details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CardComponent } from './card/card.component';
import { profile } from 'console';
import { ConvertComponent } from './convert/convert.component';

import { adminGuard } from './guard/admins/admin.guard';
import { clientgardGuard } from './guard/client/clientgard.guard';
import { ComptesComponent } from './comptes/comptes.component';
import { CameraComponent } from './camera/camera.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ParametreComponent } from './parametre/parametre.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProfilComponent } from './profil/profil.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';



import { LoginComponent } from './pages/login/login/login.component';
import { RegisterComponent } from './pages/register/register/register.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password/forget-password.component';
import { ResetComponent } from './pages/reset/reset/reset.component';
import { AuthTemplateComponent } from './auth-template/auth-template.component';



const routes: Routes = [
  {path:'',component:AuthTemplateComponent,children:[
    {path:'transaction',component:TransactionComponent},
    {path:'parametre',component:ParametreComponent},
    {path:'convert',component:ConvertComponent},
    {path:'card',component:CardComponent},
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'profil',component:ProfilComponent},
    {path:'homeadmin',component:HomeadminComponent},
    {path:'comptes',component:ComptesComponent},
    {path:'camera',component:CameraComponent},
  ]},
  
  {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'forget-password', component:ForgetPasswordComponent},
    {path:'reset/:token',component:ResetComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({   
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
