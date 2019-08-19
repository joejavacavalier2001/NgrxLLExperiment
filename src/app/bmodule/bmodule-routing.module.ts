import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BComponent } from '../bcomponent/bcomponent.component';

const routes: Routes = [
	{ path: '', component: BComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BModuleRoutingModule { }
