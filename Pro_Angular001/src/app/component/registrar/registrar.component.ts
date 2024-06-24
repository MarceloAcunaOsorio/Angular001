import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,DatePipe],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent implements OnInit {

  fechaMinima:Date = new Date();
  fechaMaxima: Date = new Date();

  fechaStrMinima:string =  '';
  fechaStrMaxima:string  = '';
  
  public myFormRegistrar!: FormGroup;
  constructor(private fb: FormBuilder ,private pd:DatePipe) {
  
   }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.myFormRegistrar = this.createMyFormRegistrar();
    this.fechaMaxima = new Date(new Date().getFullYear()-18, new Date().getMonth(), new Date().getDay());
    this.fechaStrMaxima = this.pd.transform(this.fechaMaxima,"yyyy-MM-dd");
    this.fechaMinima = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDay());
    this.fechaStrMinima = this.pd.transform(this.fechaMinima,"yyyy-MM-dd");
  }


  //metodo
  private createMyFormRegistrar(): FormGroup {
    return this.fb.group({
      nombre: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
      usuario: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      password1: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(18)]],
      password2: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(18)]],
      FechaNac: ['', [Validators.required]],
      Direccion: [''],
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



  



}
