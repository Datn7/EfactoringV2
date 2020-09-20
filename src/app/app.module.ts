import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainersComponent } from './layouts/containers/containers.component';
import { GridComponent } from './layouts/grid/grid.component';
import { TablesComponent } from './tables/tables.component';
import { NavComponent } from './nav/nav.component';
import { OffersComponent } from './offers/offers.component';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainersComponent,
    GridComponent,
    TablesComponent,
    NavComponent,
    OffersComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
