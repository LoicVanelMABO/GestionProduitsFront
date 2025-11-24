import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-add-produit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-produit.component.html',
  styleUrl: './add-produit.component.css'
})
export class AddProduitComponent implements OnInit {
  newProduit = new Produit;
  message?:string;

  constructor(private produitService : ProduitService){

  }

  ngOnInit():void{
  }
  
  addProduit(){
    alert("hello");
    //console.log(this.newProduit);
    this.produitService.ajouterProduit(this.newProduit);
    this.message = "l'article "+this.newProduit.nomProduit+" a bien été ajouté."

  }
}
