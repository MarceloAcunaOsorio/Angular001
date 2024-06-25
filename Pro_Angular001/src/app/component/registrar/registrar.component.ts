
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent implements OnInit {


  
  public myFormRegistrar!: FormGroup;
  constructor(private fb: FormBuilder) {
  
   }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.myFormRegistrar = this.createMyFormRegistrar();

  }


/**
 * @description
 * 
 * metodo para validar que los campos del formulario esten segun solicitado por cliente
 * todos los campos excepto la direccion son requeridos
 * el nombre y usuario estan validado con ciertas cantidades minimas y maximas de caracteres al igual que las contraseñas
 */
  private createMyFormRegistrar(): FormGroup {
    return this.fb.group({
      nombre    : ['', [Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
      usuario   : ['', [Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      email     : ['', [Validators.required,Validators.email]],
      password1 : ['', [Validators.required,Validators.minLength(6),Validators.maxLength(18)]],
      password2 : ['', [Validators.required,Validators.minLength(6),Validators.maxLength(18)]],
      FechaNac  : ['', [Validators.required]],
      Direccion : [''],
    });
  }

  public submitFormularioRegistrar() {
    if (this.myFormRegistrar.invalid) {
      Object.values(this.myFormRegistrar.controls).forEach(control => {
        control.markAllAsTouched();
      });
      return;
    }
    console.log(this.myFormRegistrar.value);
  }


  public get f(): any {
    return this.myFormRegistrar.controls;
  }



/**
 * @description
 * funcion para limpiar los imput del formulario de registro
 */


  limpiarFormulario()
  {
    this.myFormRegistrar.patchValue({
      nombre:'',
      usuario:'',
      email :'',
      password1:'',
      password2:'',
      FechaNac:'1900-01-01',
      Direccion:''
    })
  }
  



}
