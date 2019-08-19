import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home-component/home-component.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducer, metaReducers } from './reducers';

@NgModule({
  declarations: [
	  AppComponent,
	  HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	StoreModule.forRoot({stringChangers: reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
