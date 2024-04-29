import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: []
})
export class AppModule {
  ngDoBootstrap() {} // Define ngDoBootstrap para evitar un error de compilación
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
