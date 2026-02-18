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

  constructor(private http: HttpClient) {}

  modifierProduit(produit: Produit) {
    throw new Error('Method not implemented.');
  }

  suppProduit(id: number) : Observable<any> {
    const url = `${this.apiURL}/deleteProduct/${id}`;
    alert(url);
    return this.http.delete(url, httpOptions);
    //return this.http.put(`${url}`,httpOptions,);
  }

  listeProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiURL+'/allProduct');
  }

  ajouterProduit(produit: Produit): Observable<Produit>{
    return this.http.post<Produit>(this.apiURL+'/createProduct', produit, httpOptions);
  }

  consulterProduit(idProduit: number): Observable<Produit> {
    const url = `${this.apiURL}/${idProduit}`;
    return this.http.get<Produit>(url);
  }

  updateProduit(prod: Produit) {
    const url = `${this.apiURL}/updateProduct`;
    return this.http.put(url, prod, httpOptions).subscribe(() => {
      console.log('Produit mis à jour avec succès');
    });
  }
}
