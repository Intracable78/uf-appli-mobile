import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../account/home/home.component';
import { CreateObjectComponent } from '../object/create-object/create-object.component';
import { ObjectListComponent } from '../object/object-list/object-list.component';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        component: ObjectListComponent
      },
      {
        path: 'tab2',
        component: CreateObjectComponent
      },
      {
        path: 'account',
        component: HomeComponent
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
