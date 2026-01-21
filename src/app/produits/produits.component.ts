import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ɵEmptyOutletComponent, RouterLink } from "@angular/router";
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [NgFor, ɵEmptyOutletComponent, CommonModule, RouterLink],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})

export class ProduitsComponent implements OnInit{
  
  ModifierProduit(produit: Produit) {
    //this.produitService.suppProduit(produit);
    alert('Modification du produit ' + produit.nomProduit);
    //this.produitService.modifierProduit(produit);
  }

  supprimerProduit(produit: Produit) {
    this.produitService.suppProduit(produit);
  }

  produits? : Produit[]; //tableau de produit

  constructor(private produitService: ProduitService){
  }

  ngOnInit(): void {
    this.produits = this.produitService.listeProduits();      
  }

}
