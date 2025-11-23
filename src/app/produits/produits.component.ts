import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [NgFor, ɵEmptyOutletComponent],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent {
  produits : string[];
  constructor(){
    this.produits =["PC ASUS3","3IMPRIMANTE","tablette samsung"];
  }

}
