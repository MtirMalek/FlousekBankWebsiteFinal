import { Component } from '@angular/core';
import { DataService } from '../service/data/data.service';

@Component({
  selector: 'app-virement',
  templateUrl: './virement.component.html',
  styleUrl: './virement.component.css'
})
export class VirementComponent {
  dataArray:any;

  constructor(private ds:DataService){
    this.ds.getalltrans().subscribe((data: any) => {
      
      this.dataArray=data.data});
  }
 
}
