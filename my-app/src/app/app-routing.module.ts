import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { City2Component } from './city2/city2.component';

const routes: Routes = [
  {path:'Ajmer',component:City2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
