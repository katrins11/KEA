import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PiecesComponent } from './pieces/pieces.component';

const routes: Routes = [
  {path: 'pieces', component: PiecesComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PiecesComponent]
})
export class LazyModule { }