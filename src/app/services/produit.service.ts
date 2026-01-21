import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits: Produit[];
  produit!: Produit;
  modifierProduit(produit: Produit) {
    throw new Error('Method not implemented.');
  }

  suppProduit(produit: Produit) {
    const index = this.produits.indexOf(produit, 0);
    if (index > -1) {
      let conf = confirm("Etes-vous sûr ?");
      if (conf) {
        this.produits.splice(index, 1);
      }
    } else {
      console.log("produit non trouvé");
    }
  }

  constructor() {
    this.produits = [
      { idProduit: 1, nomProduit: "PC ASUS3 petit pays", prixProduit: 600, dateCreation: new Date("12/23/2011") },
      { idProduit: 2, nomProduit: "3IMPRIMANTE", prixProduit: 150, dateCreation: new Date("10/14/2025") },
      { idProduit: 3, nomProduit: "tablette", prixProduit: 150, dateCreation: new Date("9/12/2025") },
      { idProduit: 4, nomProduit: "PC samsung", prixProduit: 500, dateCreation: new Date("4/13/2025") },
    ];
  }

  listeProduits(): Produit[] {
    return this.produits;
  }

  ajouterProduit(produit: Produit) {
    this.produits.push(produit);
  }

  consulterProduit(idProduit: number): Produit {
    this.produit = this.produits.find(p => p.idProduit == idProduit)!;
    return this.produit;
  }

  /*updaterProduit(produit: Produit){
    this.produit = this.consulterProduit(produit.idProduit);
    this.suppProduit(this.produit);
    this.ajouterProduit(produit);
  }*/

  updateProduit(prod: Produit) {
    const index = this.produits.indexOf(prod, 0);
    if (index > -1) {
      this.produits.splice(index, 1);//supp l'ancien produit
      this.produits.splice(index, 0, prod);//ajout le produit modifié à la même position
      console.log(this.produits);
    }
  }
}
