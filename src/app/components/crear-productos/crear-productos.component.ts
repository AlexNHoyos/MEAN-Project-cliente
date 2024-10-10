import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from '../../models/producto';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrl: './crear-productos.component.css'
})
export class CrearProductosComponent {
  
  productoForm: FormGroup;

  constructor(private fb:FormBuilder, private router:Router, private toastr: ToastrService, private _productoService:ProductoService) {
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required]
    })
   }

  agregarProducto(){
    console.log(this.productoForm)
    console.log(this.productoForm.get('producto')?.value)

    const PRODUCTO: Producto = {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value
    }

    this._productoService.guardarProducto(PRODUCTO).subscribe(data => {
      this.toastr.success('El producto ha sido registrado satisfactoriamente', 'Producto registrado!')
      this.router.navigate(['/'])
    }, error => {
      console.log(error);
      this.productoForm.reset();
    })

   
  }
}
