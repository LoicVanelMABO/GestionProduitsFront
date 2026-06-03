import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { FormsModule } from '@angular/forms';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-update-cat',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-cat.component.html',
  styles: ``
})

export class UpdateCatComponent {
  constructor(private produitService:ProduitService){}
  
  saveCat(cat: Categorie) {
    console.log("saveCat ",cat);
    this.categorieUpdated.emit(this.categorie);    
  }

  @Input()
  categorie!:Categorie;

  @Input()
  add!:boolean;

  @Output()
  categorieUpdated = new EventEmitter<Categorie>();

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateCategorie ",this.categorie);
  }
}
