import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  Id=""
  constructor(private route:ActivatedRoute){
    this.route.params.subscribe(data=>{
      this.Id=data['id'];
    })    
  }
}
