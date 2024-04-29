import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductosComponent } from './components/crear-productos/crear-productos.component';


const routes: Routes =[
  {path: '', component: ListarProductosComponent},
  {path:'crear-producto', component:CrearProductosComponent},
  {path:'editar-producto/:id', component:CrearProductosComponent},
  {path: '**', redirectTo:'', pathMatch:'full'}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule] 
})
export class AppRoutingModule { }
export {routes}
