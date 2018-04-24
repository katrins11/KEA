import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Material
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Pages
import { PiecesComponent } from './pieces/pieces.component';
import { CreativesComponent } from './creatives/creatives.component';
import { AboutComponent } from './about/about.component';
import { LogInComponent } from './log-in/log-in.component';

//Admin
import { AdminComponent } from './admin/admin.component';
import { MyProfileComponent } from './admin/my-profile/my-profile.component';
import { MyPiecesComponent } from './admin/my-pieces/my-pieces.component';
import { AdmitPieceComponent } from './admin/admit-piece/admit-piece.component';
import { ServiceChatComponent } from './admin/service-chat/service-chat.component';

//INPUT FORM
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

//AuthService
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';






@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    AdminComponent,
    MyProfileComponent,
    MyPiecesComponent,
    AdmitPieceComponent,
    ServiceChatComponent,
    CreativesComponent,
    AboutComponent,
    PiecesComponent
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



