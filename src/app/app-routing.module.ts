import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AddheroComponent } from './addhero/addhero.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path:'dashboard', component: DashboardComponent},
  {path:'heroes', component: HeroesComponent},
  {path:'heroes/:id', component: HeroDetailComponent},
  {path:'add', component: AddheroComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
