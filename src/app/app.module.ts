import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
