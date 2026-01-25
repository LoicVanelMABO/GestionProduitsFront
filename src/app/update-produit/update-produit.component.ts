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
  newCatId!: Categorie;
  currentProduit!: Produit;
  constructor(private produitService: ProduitService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id']
    this.currentProduit = this.produitService.consulterProduit(id);
    this.categorieTabs = this.produitService.listCategories();
  }

  updateProduit() {
    this.produitService.updateProduit(this.currentProduit);
    this.router.navigate(['produits']);
  }

}
