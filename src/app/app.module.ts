import { LOCALE_ID, NgModule } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { FooterModule } from './shareds/footer/footer.module';
import { NavbarModule } from './shareds/navbar/navbar.module';
import { CarouselModule } from './shareds/carousel/carousel.module';
import { TableModule } from './shareds/table/table.module';
import { NewsPlayerModule } from './shareds/news-player/news-player.module';


registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    FooterModule,
    CarouselModule,
    TableModule,
    NewsPlayerModule

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' } // <-- Forzar idioma español
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
