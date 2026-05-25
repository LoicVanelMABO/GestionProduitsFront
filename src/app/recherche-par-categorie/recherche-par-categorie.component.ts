import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-recherche-par-categorie',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './recherche-par-categorie.component.html',
  styles: ``
})
export class RechercheParCategorieComponent {
  produits!:Produit[];
  idCategorie!:number;
  categories!: Categorie[];

  constructor(private produitService : ProduitService, private router: Router){

  }

  ngOnInit():void{
    this.produitService.listCategories().subscribe(cats =>{this.categories = cats._embedded.categories;
      
    });
    this.chargerProduits();
  }
  
  chargerProduits(){
    this.produitService.listeProduits().subscribe(prods => {
      this.produits = prods;
    });
  }

  onChange(){
    if(this.idCategorie != 0){
    this.produitService.rechercheParCategorie(this.idCategorie).subscribe(prods => {this.produits=prods});
    }else{
      this.chargerProduits();
    }
  }

}
