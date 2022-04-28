import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { CreateObjectComponent } from './object/create-object/create-object.component';
import { ObjectListComponent } from './object/object-list/object-list.component';
import { ObjectDetailComponent } from './object/object-detail/object-detail.component';
import { HomeComponent } from './account/home/home.component';
import { ProfileComponent } from './account/profile/profile.component';
import { TransactionsComponent } from './account/transactions/transactions.component';
import { AnnoncesComponent } from './account/annonces/annonces.component';
import { HttpInterceptorRequest } from './interceptor/http.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    CreateObjectComponent,
    ObjectListComponent,
    ObjectDetailComponent,
    HomeComponent,
    ProfileComponent,
    TransactionsComponent,
    AnnoncesComponent

  ],
  entryComponents: [

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorRequest,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
