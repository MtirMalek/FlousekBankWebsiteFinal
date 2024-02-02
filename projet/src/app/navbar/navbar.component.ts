import { Component } from '@angular/core';
import { ShareServiceService } from '../service/share-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  a:boolean;
  constructor(private share:ShareServiceService){
    this.a=this.share.isAdmin;
  }
}
