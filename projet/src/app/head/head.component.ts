import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareServiceService } from '../service/share-service.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {
  name:any;
  urlAsString ="";
  constructor(private sharedService: ShareServiceService){
    this.name =this.sharedService.fu();
    //this.urlAsString=currentUrl.map(segment => segment.path).join('/');
  }

}
