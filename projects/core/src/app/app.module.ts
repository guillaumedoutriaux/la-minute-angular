import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routes';
import { NgrxconfigModule } from './ngrxconfig.module';

import * as fromContainers from './containers';
import * as fromComponents from './components';

@NgModule({
  declarations: [...fromContainers.containers, ...fromComponents.components],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgrxconfigModule
  ],
  providers: [],
  bootstrap: [fromContainers.AppComponent]
})
export class AppModule {}
