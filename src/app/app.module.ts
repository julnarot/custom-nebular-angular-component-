import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbSidebarModule, NbSidebarService} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {BasicsModule} from "./modules/shared/basics/basics.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'default'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule,
    BasicsModule
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
