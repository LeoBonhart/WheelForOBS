import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WheelComponent } from './wheel/wheel.component';
import { PedalsComponent } from './pedals/pedals.component';
import { DebugComponent } from './debug/debug.component';
import { G29Component } from './wheel/g29/g29.component';
import { G27Component } from './wheel/g27/g27.component';

@NgModule({
  declarations: [
    AppComponent,
    WheelComponent,
    PedalsComponent,
    DebugComponent,
    G29Component,
    G27Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
