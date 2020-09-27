import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompteFormComponent} from './compte-form/compte-form.component';
import {RecapitulatifComponent} from './recapitulatif/recapitulatif.component';

const routes: Routes = [
  { path: '', redirectTo: 'compte-form', pathMatch: 'full' },
  { path: 'compte-form', component: CompteFormComponent },
  {path: 'recapitulatif', component: RecapitulatifComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
