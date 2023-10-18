import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //snackBar
  

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {

    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  ngOnInit() {

  }
  error() {
    this._snackBar.open('Usuario o Contraseña incorrecta', '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 5000
    });
  }
  ingresar() {
    //console.log(this.form.value.usuario)
    //console.log(this.form)
    //capturamos los datos:

    const nombre = this.form.value.usuario;
    const pass = this.form.value.password
    console.log(nombre, pass)

    if(nombre=="vicente" && pass== "admin123"){
      console.log("ha introducido los datos correctamente")
    }else{
      this.error();
    }
  }
}
