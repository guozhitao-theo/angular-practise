import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentAndTemplatesModule } from './component-and-templates/component-and-templates.module';
import { HLModule } from './directive/hightlightDirective/hl.module';
import { AppunlessDirective } from './directive/appUnless/appunless.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppunlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentAndTemplatesModule,
    HLModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
