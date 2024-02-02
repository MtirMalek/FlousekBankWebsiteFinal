import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @ViewChild('contenue', { static: true }) private contenueElement: ElementRef;
  constructor() {
    this.contenueElement = new ElementRef(null);
  }
  Paiement() {
    // Utilisez la référence à l'élément du DOM pour mettre à jour le contenu
    this.contenueElement.nativeElement.innerHTML = "Plafond paiement <strong>6000,<span>000</span></strong><sup class='suptext'>TND</sup>";
  }
  onBoutonClique() {
    // Appelez la fonction Paiement
    this.Paiement();
  }
}
