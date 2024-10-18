import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from '../../models/producto';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrl: './crear-productos.component.css'
})
export class CrearProductosComponent {
  
  productoForm: FormGroup;
  titulo ="Crear producto";
  id: string;

  constructor(private fb:FormBuilder, private router:Router, private toastr: ToastrService, private _productoService:ProductoService, private aRoute: ActivatedRoute) {
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id')!;
   }

   ngOnInit(): void{
    this.esEditar();
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
  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar producto';
      this._productoService.obtenerProducto(this.id).subscribe(data => {
        this.productoForm.setValue({
          producto: data.nombre,
          categoria: data.categoria,
          ubicacion: data.ubicacion,
          precio: data.precio
        })
      })
    }
  }
}
