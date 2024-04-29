import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductosComponent } from './components/crear-productos/crear-productos.component';



@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        {path: '', component: ListarProductosComponent},
        {path:'crear-producto', component:CrearProductosComponent},
        {path:'editar-producto/:id', component:CrearProductosComponent},
        {path: '**', redirectTo:'', pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
