import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//INPUT FORM
import {MatInputModule} from '@angular/material/input';
//Material
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { AdminComponent } from './admin/admin.component';
import { MyRecipesComponent } from './admin/my-recipes/my-recipes.component';
import { MyProfileComponent } from './admin/my-profile/my-profile.component';
import { MyFavoriteComponent } from './admin/my-favorite/my-favorite.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

//AuthService
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    AddRecipeComponent,
    AllRecipesComponent,
    AdminComponent,
    MyRecipesComponent,
    MyProfileComponent,
    MyFavoriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }



