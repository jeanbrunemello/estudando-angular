import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { PostSimulatorComponent } from './post-simulator/post-simulator.component';
import { ComponentAngularComponent } from './component-angular/component-angular.component';
import { ExternoComponent } from './externo/externo.component';
import { InternoComponent } from './externo/interno/interno.component';
import { DiretivasComponent } from './diretivas/diretivas.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    DataBindingComponent,
    PostSimulatorComponent,
    ComponentAngularComponent,
    ExternoComponent,
    InternoComponent,
    DiretivasComponent
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
