import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AComponent } from '../acomponent/acomponent.component';

const routes: Routes = [
	{ path: '', component: AComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AModuleRoutingModule { }
