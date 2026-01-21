import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ɵEmptyOutletComponent, RouterLink } from "@angular/router";
=======
import { ɵEmptyOutletComponent } from "@angular/router";
>>>>>>> 903197d (add produit & form add produit)
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  standalone: true,
<<<<<<< HEAD
  imports: [NgFor, ɵEmptyOutletComponent, CommonModule, RouterLink],
=======
  imports: [NgFor, ɵEmptyOutletComponent,CommonModule],
>>>>>>> 903197d (add produit & form add produit)
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})

export class ProduitsComponent implements OnInit{
<<<<<<< HEAD
<<<<<<< HEAD
  
  ModifierProduit(produit: Produit) {
    //this.produitService.suppProduit(produit);
    alert('Modification du produit ' + produit.nomProduit);
    //this.produitService.modifierProduit(produit);
=======
ModifierProduit(produit: Produit) {
  this.produitService.suppProduit(produit);
    alert('Modification du produit ' + produit.nomProduit);
    this.produitService.modifierProduit(produit);
>>>>>>> 871cdbf (supp elt du tableau)
  }

  supprimerProduit(produit: Produit) {
    this.produitService.suppProduit(produit);
  }
<<<<<<< HEAD

=======
>>>>>>> 903197d (add produit & form add produit)
=======
>>>>>>> 871cdbf (supp elt du tableau)
  produits? : Produit[]; //tableau de produit

  constructor(private produitService: ProduitService){
  }

  ngOnInit(): void {
    this.produits = this.produitService.listeProduits();      
  }

}
