import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShareServiceService } from '../service/share-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  VerifAdmin=false;
  constructor(private route : Router,private share:ShareServiceService)
  {
    this.VerifAdmin=this.share.isAdmin;

  }
}
