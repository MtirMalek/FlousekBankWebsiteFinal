import { Component } from '@angular/core';
interface Personne{
  First:string,
  Last:string,
  handle:string
}
@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrl: './comptes.component.css'
})
export class ComptesComponent {
  courses : Personne[]=[
    {First:"Youssef Saidi",Last:"11234567",handle:"350"},
    {First:"Takwa Bouchadekh",Last:"12234567",handle:"1000"},
    {First:"Souleima Haouel",Last:"12236532",handle:"225.5"},
    {First:"Wajd Mahdaoui",Last:"12235663",handle:"-100"},
    {First:"Ala Messoued",Last:"12234725",handle:"500"}
  ];
  
  getTotalCourses(){
    return this.courses.length;
  }
  
  

  courseCountRadioButton: string = 'All';
  searchText: string = '';

  onFilterRadioButtonChanged(data: string){
    this.courseCountRadioButton = data;
    //console.log(this.courseCountRadioButton);
  }

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    //console.log(this.searchText);
  }
}
