import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Categorie } from '../model/categorie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-produit.component.html',
  styleUrl: './add-produit.component.css'
})
export class AddProduitComponent implements OnInit {
  categorieTabs!:Categorie[];
  newCategorie!: Categorie;
  newIdCat!: number;
  newProduit = new Produit;
  message?:string;

  constructor(private produitService : ProduitService, private router: Router){

  }

  ngOnInit():void{
    this.categorieTabs = this.produitService.listCategories()
  }
  
  addProduit(){
    //alert(this.newIdCat);
    this.newCategorie = this.produitService.consulterCategorie(this.newIdCat!)
    this.newProduit.categorie = this.newCategorie;
    this.produitService.ajouterProduit(this.newProduit);
    this.message = "l'article "+this.newProduit.nomProduit+" a bien été ajouté."
    this.router.navigate(['produits']);

  }
}
