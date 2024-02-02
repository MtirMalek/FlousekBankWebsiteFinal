import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShareServiceService } from '../service/share-service.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {
  
  VerifAdmin=false;
  constructor(private route : Router,private share:ShareServiceService)
  {
    this.VerifAdmin=share.isAdmin;

  }
}
