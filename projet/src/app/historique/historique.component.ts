import { Component } from '@angular/core';
interface Personne{
  First:string,
  Last:string,
  handle:string,etat:string
}
@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrl: './historique.component.css'
})
export class HistoriqueComponent {
  tab : Personne[]=[
    {First:"28/01/2024",Last:"123456789",handle:"120",etat:"In process"},
    {First:"8/01/2024",Last:"987654321",handle:"1000",etat:"Accepted"},
    {First:"31/12/2023",Last:"52252926",handle:"400",etat:"Rejected"}
  ];
}
