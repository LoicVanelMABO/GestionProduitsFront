import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ɵEmptyOutletComponent } from "@angular/router";
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [NgFor, ɵEmptyOutletComponent,CommonModule],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})

export class ProduitsComponent implements OnInit{
  produits? : Produit[]; //tableau de produit

  constructor(private produitService: ProduitService){
  }

  ngOnInit(): void {
    this.produits = this.produitService.listeProduits();      
  }

}
