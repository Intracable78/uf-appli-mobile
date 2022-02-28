import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CreateObjectComponent } from './object/create-object/create-object.component';
import { ObjectDetailComponent } from './object/object-detail/object-detail.component';
import { ObjectListComponent } from './object/object-list/object-list.component';
import { HomeComponent } from './account/home/home.component';
import { TransactionsComponent } from './account/transactions/transactions.component';
import { ProfileComponent } from './account/profile/profile.component';
import { AnnoncesComponent } from './account/annonces/annonces.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'create-object',
    component: CreateObjectComponent
  },
  {
    path: 'objects-list',
    component: ObjectListComponent
  },
  {
    path: 'object/:id',
    component: ObjectDetailComponent
  },
  {
    path: 'account',
    component: HomeComponent,
  },
  {
    path: 'tabs/account/profile',
    component: ProfileComponent
  },
  {
    path: 'tabs/account/transactions',
    component: TransactionsComponent
  },
  {
    path: 'tabs/account/announces',
    component: AnnoncesComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
