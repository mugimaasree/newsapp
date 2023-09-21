import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechnewsComponent } from './technews/technews.component';
import { BussinessComponent } from './bussiness/bussiness.component';

const routes: Routes = [
  {path:'',component:TopheadingComponent},
  {path:'tech',component:TechnewsComponent},
  {path:'business',component:BussinessComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
