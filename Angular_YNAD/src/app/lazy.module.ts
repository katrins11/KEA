import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PiecesComponent } from './pieces/pieces.component';

const routes: Routes = [
  {path: 'pieces', component: PiecesComponent}
];

@NgModule({
  declarations: [PiecesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LazyModule { }