import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css'
})
export class ListarProductosComponent implements OnInit{

  listarProducto : Producto[] = [];
  constructor(private _productoService: ProductoService  ) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this._productoService.getProductos().subscribe( data => {
      console.log(data);
      this.listarProducto = data;
    }, error =>{
      console.log(error);
    })
  }
}
