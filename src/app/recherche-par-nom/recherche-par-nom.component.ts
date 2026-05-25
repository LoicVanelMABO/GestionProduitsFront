import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './recherche-par-nom.component.html',
  styles: ``
})
export class RechercheParNomComponent {
  produits!: Produit[];
  idCategorie!: number;
  falla!: string;
  searchTerm!:string;

  constructor(private produitService: ProduitService) { }

  rechercherProds() {
    if (this.falla) {
      this.produitService.rechercherParNom(this.falla).subscribe(prods => {
        this.produits = prods;
      });
    } else {
      this.chargerProduits();
    }
  }

  ngOnInit(): void {
    this.chargerProduits();
  }

  chargerProduits() {
    this.produitService.listeProduits().subscribe(prods => {
      this.produits = prods;
    });
  }

  onKeyUp(filterText:string): void{
    if(filterText.length>0){
      console.log(filterText.length);
      this.produits = this.produits.filter(item => item.nomProduit?.toLowerCase().includes(filterText.toLowerCase()));
    }else{
      console.log(filterText.length);
      this.chargerProduits();
    }
  }

}
