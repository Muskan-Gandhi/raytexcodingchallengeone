import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { City2Component } from './city2/city2.component';
import {RouterModule} from '@angular/router';
// import {allAppRoutes} from './routes';

@NgModule({
  declarations: [
    AppComponent,
    City2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
    // RouterModule.forRoot(allAppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function allAppRoutes(allAppRoutes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

