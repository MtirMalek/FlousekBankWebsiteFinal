import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareServiceService } from './service/share-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projet';
  printData(event:string){
    console.log(event);
  }
  constructor(private sharedService: ShareServiceService) { }

}
