import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, UrlSerializer } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { ProductComponent } from './product/product.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ConfirmedComponent } from './confirmed/confirmed.component';
const appRoutes: Routes = [
  {path: '', component: ProductComponent},
  {path: 'confirm', component: ConfirmComponent},
  {path: 'pays', component: UserCardComponent},
  {path: 'confirmed', component: ConfirmedComponent}

]

@NgModule({
  imports: [
    
    FormsModule
  ],
  declarations: [
    
  
    ConfirmedComponent
  ],
  
})
export class ApModule { }

@NgModule({
  declarations: [
    AppComponent,
    ConfirmComponent,
    UserCardComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
