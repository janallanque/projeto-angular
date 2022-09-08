import { Component } from '@angular/core';

import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'biblioteca-virtual';



 cadastrar(){
   
   const formulario = document.querySelector("#form-control")
   console.log(formulario)
 }}