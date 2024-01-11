import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-form-email',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './form-email.component.html',
  styleUrl: './form-email.component.css'
})
export class FormEmailComponent {
  formemail = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private router: Router, private formBuilder: FormBuilder) { }
  step2() {
    this.router.navigate(['topics']);
  }

  viewErrorMessage(field: string) {
    const control = this.formemail.get(field);
    if (control?.errors?.['required'] && control?.touched) return `${field} is required`;
    if (control?.errors?.['email'] && control?.touched) return 'Invalid email';
    return '';
  }
}
