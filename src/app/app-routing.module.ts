import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { FeatureComponent } from './components/pages/feature/feature.component';
import { AboutComponent } from './components/pages/about/about.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'menu',
    component:MenuComponent
  },
  {
    path:'feature',
    component:FeatureComponent
  },
  {
    path:'about',
    component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
