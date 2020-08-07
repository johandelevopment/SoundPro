import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      Name: new FormControl("", [Validators.required]),
      Email: new FormControl("", [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      Message: new FormControl("", [Validators.required])
    });
  }
  sendMessage() {
    if (this.contactForm.valid) {

    }
    else {
      alert('Digilencia todo el formulario por favor.');
    }
    console.log('Enviado')
  }
  getErrorMessage(control: string) {
    switch (control) {
      case 'Name':
        return this.contactForm.get(control).hasError('required') ? 'Nombres son obligatorios.' : '';
      case 'Email':
        return this.contactForm.get(control).hasError('required') ? 'Correo electrónico es obligatorio.' : this.contactForm.get(control).hasError('pattern') ? 'Correo electrónico inválido' : '';
      case 'Message':
        return this.contactForm.get(control).hasError('required') ? 'Mensaje es obligatorio.' : '';
      default:
        return '';
    }
  }
}
