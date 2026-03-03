import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../model/produit.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-produit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-produit.component.html',
  styles: ``
})
export class UpdateProduitComponent implements OnInit {

  categorieTabs!: Categorie[];
  updateCatId!: number;
  newCategorie!: Categorie;
  currentProduit!: Produit;
  constructor(private produitService: ProduitService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id']
    this.produitService.consulterProduit(id).subscribe(produit => {
      this.currentProduit = produit;
      this.updateCatId = this.currentProduit.categorie?.idCat!;
    });
  }

  updateProduit() {
    this.produitService.updateProduit(this.currentProduit).subscribe(produit => {
      this.router.navigate(['produits']);
    });
  }

}
