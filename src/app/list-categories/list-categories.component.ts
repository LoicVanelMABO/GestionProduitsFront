import { Component } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Categorie } from '../model/categorie.model';
import { UpdateCatComponent } from "../update-cat/update-cat.component";

@Component({
  selector: 'app-list-categories',
  standalone: true,
  imports: [UpdateCatComponent],
  templateUrl: './list-categories.component.html',
  styles: ``
})
export class ListCategoriesComponent {  
  listCat!: Categorie[];
  categorie: Categorie = new Categorie();
  add :boolean = true;
   
selecta(cat: Categorie) {
  this.add = false;
  this.categorie = cat;
}


  constructor(private produitService : ProduitService){}

  ngOnInit(){
    this.chargementCat();
  }

  categorieUpdated(cat:Categorie){
    console.log("categorieUpdated ",cat);
    this.produitService.ajoutCategorie(cat).subscribe(() => this.chargementCat());
  }

  chargementCat(){
    this.produitService.listCategories().subscribe(cats =>{
      this.listCat = cats._embedded.categories;
    });
  }
}
