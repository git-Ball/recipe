import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { RouterModule } from '@angular/router';
import { RecipesRoutingModule } from './recipes-routing-module';
import { CreatePageComponent } from './create-page/create-page.component';
import { RecipeListItemComponent } from './recipe-list-item/recipe-list-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';



@NgModule({
  declarations: [
    RecipesPageComponent,
    AllRecipesComponent,
    CreatePageComponent,
    RecipeListItemComponent,
    RecipeListComponent
  ],
  imports: [
    CommonModule,
    // RouterModule
    RecipesRoutingModule
  ],
  exports:[
    RecipesPageComponent,
    AllRecipesComponent,
    CreatePageComponent,

    RecipeListItemComponent,
    RecipeListComponent
    
  ]
})
export class RecipesModule { }
