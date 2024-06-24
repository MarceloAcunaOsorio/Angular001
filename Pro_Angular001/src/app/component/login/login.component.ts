import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  public myForm!: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.myForm = this.createMyForm();
  }

  //metodo
  private createMyForm():FormGroup{
    return this.fb.group({
      usuario:['',[Validators.required]],
      password:['',[Validators.required]]
    });
  }

  public submitFormulario(){
   if(this.myForm.invalid)
    {
      Object.values(this.myForm.controls).forEach( control =>{
        control.markAllAsTouched();
      });
        return;
    }
    console.log(this.myForm.value);
  }


  public get f():any{
    return this.myForm.controls;
  }

}