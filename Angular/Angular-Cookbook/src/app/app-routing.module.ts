import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { AdminComponent } from './admin/admin.component';
import { MyProfileComponent } from './admin/my-profile/my-profile.component';
import { PiecesComponent } from './pieces/pieces.component';
import { CreativesComponent } from './creatives/creatives.component';
import { AboutComponent } from './about/about.component';
import { MyPiecesComponent } from './admin/my-pieces/my-pieces.component';
import { AdmitPieceComponent } from './admin/admit-piece/admit-piece.component';
import { AuthGuardService } from './auth-guard.service';
import { ServiceChatComponent } from './admin/service-chat/service-chat.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'home',  pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pieces', component: PiecesComponent },
  { path: 'creatives', component: CreativesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService], children: [
    { path: 'admin/my-profile', component: MyProfileComponent},
    { path: 'admin/my-pieces', component: MyPiecesComponent},
    { path: 'admin/admit-piece', component: AdmitPieceComponent},
    { path: 'admin/service-chat', component: ServiceChatComponent},
    // { path: '**', component: PageNotFoundComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
