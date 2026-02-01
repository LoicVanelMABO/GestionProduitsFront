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
    //this.categorieTabs = this.produitService.listCategories();
    let id = this.activatedRoute.snapshot.params['id']
    //this.currentProduit = this.produitService.consulterProduit(id);
    this.updateCatId = this.currentProduit.categorie!.idCat;
  }

  updateProduit() {
    //this.newCategorie = this.produitService.consulterCategorie(this.updateCatId);
    //this.currentProduit.categorie = this.newCategorie;
    this.produitService.updateProduit(this.currentProduit);
    this.router.navigate(['produits']);
  }

}
