import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShareServiceService } from '../service/share-service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  
  title = 'projet';
  x=0;
  VerifAdmin=true;
  constructor(private route : Router,private share:ShareServiceService,)
  {
    this.VerifAdmin=share.isAdmin;
    

  }
 
}
