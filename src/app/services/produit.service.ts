import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  apiURL: string = 'http://localhost:8080/produits/Api';

  produits!: Produit[];
  produit!: Produit;
  //categories!: Categorie[];

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

  constructor(private http: HttpClient) {
    /* this.categories = [
      { idCat: 1, nomCategorie: "Ordinateurs" },
      { idCat: 2, nomCategorie: "Imprimantes" }
    ]; */

    /*this.produits = [
      { idProduit: 1, nomProduit: "PC ASUS3 petit pays", prixProduit: 600, dateCreation: new Date("12/23/2011"), categorie: { idCat: 1, nomCategorie: "Ordinateurs" } },
      { idProduit: 2, nomProduit: "3IMPRIMANTE", prixProduit: 150, dateCreation: new Date("10/14/2025") , categorie: { idCat: 1, nomCategorie: "Ordinateurs" }},
      { idProduit: 3, nomProduit: "tablette", prixProduit: 150, dateCreation: new Date("9/12/2025"), categorie: { idCat: 1, nomCategorie: "Ordinateurs" } },
      { idProduit: 4, nomProduit: "PC samsung", prixProduit: 500, dateCreation: new Date("4/13/2025"), categorie: { idCat: 1, nomCategorie: "Ordinateurs" } },
    ];*/
  }

  /* listCategories(): Categorie[]{
    return this.categories;
  }

  consulterCategorie(idCat: number) :Categorie{
    return this.categories.find(c=>c.idCat==idCat)!
  } */

  listeProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiURL+'/allProduct');
  }

  ajouterProduit(produit: Produit): Observable<Produit>{
    return this.http.post<Produit>(this.apiURL+'/createProduct', produit, httpOptions);
  }

  consulterProduit(idProduit: number): Produit {
    this.produit = this.produits.find(p => p.idProduit == idProduit)!;
    return this.produit;
  }

  updateProduit(prod: Produit) {
    const index = this.produits.indexOf(prod, 0);
    if (index > -1) {
      this.produits.splice(index, 1);//supp l'ancien produit
      this.produits.splice(index, 0, prod);//ajout le produit modifié à la même position
      console.log(this.produits);
    }
  }
}
