import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../reducers';
import { BModuleRoutingModule } from './bmodule-routing.module';
import { BComponent } from '../bcomponent/bcomponent.component';

@NgModule({
  declarations: [BComponent],
  imports: [
    CommonModule,
	BModuleRoutingModule,
	StoreModule.forFeature("bmoduleStoreFeature",{stringChangers: reducer})
  ]
})
export class BModule { }
