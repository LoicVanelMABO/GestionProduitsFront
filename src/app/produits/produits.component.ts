import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [NgFor, CommonModule, RouterLink],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})

export class ProduitsComponent implements OnInit{
  
  ModifierProduit(produit: Produit) {
    alert('Modification du produit ' + produit.nomProduit);
  }

  supprimerProduit(produit: Produit) {
    this.produitService.suppProduit(produit);
  }
  produits? : Produit[]; //tableau de produit

  constructor(private produitService: ProduitService){
  }

  ngOnInit(): void {
    this.produitService.listeProduits().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
    });
  }

}
