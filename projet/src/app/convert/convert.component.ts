import { Component } from '@angular/core';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.css'
})
export class ConvertComponent {
  devise = ['TND', 'EURO','USD','QAD'];
  selecteddevise: string = 'TND';
  selecteddevisetarget: string = 'EURO';
  date=new Date();
}
