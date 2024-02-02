import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Router } from 'express';
import { CommonModule, HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';

import { CardComponent } from './card/card.component';
import { CarouselCardComponent } from './carousel-card/carousel-card.component';

import { ConvertComponent } from './convert/convert.component';

import { ComptesComponent } from './comptes/comptes.component';
import { clientgardGuard } from './guard/client/clientgard.guard';
import { adminGuard } from './guard/admins/admin.guard';
import { CameraComponent } from './camera/camera.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { ViewComponent } from './view/view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { VirementComponent } from './virement/virement.component';
import { HeadComponent } from './head/head.component';
import { HistoriqueComponent } from './historique/historique.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { SearchComponent } from './search/search.component';
import { ParametreComponent } from './parametre/parametre.component';
import { TransactionComponent } from './transaction/transaction.component';
import { HttpClientModule } from '@angular/common/http';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password/forget-password.component';
import { LoginComponent } from './pages/login/login/login.component';
import { RegisterComponent } from './pages/register/register/register.component';
import { ResetComponent } from './pages/reset/reset/reset.component';
import { AuthTemplateComponent } from './auth-template/auth-template.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProfilComponent,
    ViewComponent,
    DetailsComponent,
    PagenotfoundComponent,
    NavbarComponent,
    SidebarComponent,
    CarouselComponent,
    VirementComponent,
    CardComponent,
    CarouselCardComponent,
    HeadComponent,
    HistoriqueComponent,
    ConvertComponent,
    HomeadminComponent,
    ComptesComponent,
    CameraComponent,
    SearchComponent,
    ParametreComponent,
    TransactionComponent,
    ForgetPasswordComponent,
    LoginComponent,
    RegisterComponent,
    ResetComponent,
    AuthTemplateComponent,
    HeaderComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,CommonModule
  ],
  providers: [
    provideClientHydration(),adminGuard,clientgardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
