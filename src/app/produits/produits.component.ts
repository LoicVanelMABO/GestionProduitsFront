import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [NgFor, CommonModule, RouterLink],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})

export class ProduitsComponent implements OnInit{
  produits? : Produit[]; //tableau de produit

  constructor(private produitService: ProduitService, private router: Router){
  }

  ngOnInit(): void {
    this.chargerProduits();
  }
  
  ModifierProduit(produit: Produit) {
    alert('Modification du produit ' + produit.nomProduit);
  }

  chargerProduits(){
    this.produitService.listeProduits().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
    });
  }

  public supprimerProduit(produit: Produit) {
    let conf = confirm("Etes-vous sûr de vouloir supprimer le produit " + produit.nomProduit + " ?");
    if(conf){
      this.produitService.suppProduit(produit.idProduit!).subscribe(() =>{
        this.chargerProduits();
        //this.router.navigate(['produits']);
      });
    }
  }
}
