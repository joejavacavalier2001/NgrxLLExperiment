import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../reducers';
import { AModuleRoutingModule } from './amodule-routing.module';
import { AComponent } from '../acomponent/acomponent.component';

@NgModule({
  declarations: [AComponent],
  imports: [
	CommonModule,
	AModuleRoutingModule,
	StoreModule.forFeature("amoduleStoreFeature",{stringChangers: reducer})
  ]
})
export class AModule { }
