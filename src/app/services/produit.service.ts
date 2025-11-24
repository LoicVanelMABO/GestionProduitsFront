import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits:Produit[];

  constructor() {
    this.produits =[
      {idProduit:1, nomProduit : "PC ASUS3 petit pays",prixProduit: 600, dateCreation: new Date("12/23/2011")},
      {idProduit:2, nomProduit : "3IMPRIMANTE",prixProduit: 150, dateCreation: new Date("10/14/2025")},
      {idProduit:3, nomProduit : "tablette",prixProduit: 150, dateCreation: new Date("9/12/2025")},
      {idProduit:4, nomProduit : "PC samsung",prixProduit: 500, dateCreation: new Date("4/13/2025")},
    ];
  }

  listeProduits(): Produit[]{
    return this.produits;
  }

  ajouterProduit(produit : Produit){
    this.produits.push(produit);
  }
}
