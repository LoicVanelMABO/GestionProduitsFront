import { Routes } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { produitGuard } from './produit.guard';

export const routes: Routes = [
    { path: "produits", component: ProduitsComponent },
    { path: "add-produit", component: AddProduitComponent, canActivate: [produitGuard] },
    { path: "", redirectTo: "produits", pathMatch: "full" },
    { path: "updateProduit/:id", component: UpdateProduitComponent, canActivate: [produitGuard]},
    { path: "rechercheParCategorie", component: RechercheParCategorieComponent },
    { path: "rechercheParNom", component: RechercheParNomComponent },
    { path: "listCat", component: ListCategoriesComponent },
    { path: "login", component:LoginComponent},
    { path: "app-forbidden", component:ForbiddenComponent}
];
