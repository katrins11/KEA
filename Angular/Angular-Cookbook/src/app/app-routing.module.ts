import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { AdminComponent } from './admin/admin.component';
import { MyFavoriteComponent } from './admin/my-favorite/my-favorite.component';
import { MyRecipesComponent } from './admin/my-recipes/my-recipes.component';
import { MyProfileComponent } from './admin/my-profile/my-profile.component';


const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'all-recipres', component: AllRecipesComponent },
  { path: 'add-recipre', component: AddRecipeComponent },
  { path: 'log-in', component: LogInComponent},
  // { path: 'contact', component: ContactComponent, canActivate: [AuthGuardService] },
  { path: 'admin', component: AdminComponent, children: [
    { path: 'my-profile', component: MyProfileComponent},
    { path: 'my-recipre', component: MyRecipesComponent},
    { path: 'my-favorite', component: MyFavoriteComponent},
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
