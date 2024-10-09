import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css'
})
export class ListarProductosComponent implements OnInit{

  listarProducto : Producto[] = [];
  constructor(private _productoService: ProductoService,
        private toastr: ToastrService ) { }

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

  eliminarProducto(id:any){
    this._productoService.eliminarProducto(id).subscribe(data => {
      this.toastr.error('El producto ha sido eliminado con exito', 'Producto eliminado');
      this.obtenerProductos();
    }, error => {
      console.log(error);
    })
  }
}
