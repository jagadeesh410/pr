import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PgComponent } from './pg/pg.component';

const routes:Routes=[
  {path: '', redirectTo:'/Pg', pathMatch:'full'},
  {path:'***', component: HomeComponent},
  
  {path:'Home', component:HomeComponent},
  {path:'Pg', component:PgComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
