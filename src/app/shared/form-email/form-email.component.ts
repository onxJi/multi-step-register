import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { SubmitButtonComponent } from '../submit-button/submit-button.component';
import { StepService } from '../../services/StepService.service';

@Component({
  selector: 'app-form-email',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, SubmitButtonComponent],
  templateUrl: './form-email.component.html',
  styleUrl: './form-email.component.css'
})
export class FormEmailComponent implements OnInit {
  formemail = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private router: Router, private formBuilder: FormBuilder, private stepService: StepService) { }
  step2() {
    this.router.navigate(['topics']);
  }

  viewErrorMessage(field: string) {
    const control = this.formemail.get(field);
    if (control?.errors?.['required'] && control?.touched) return `${field} is required`;
    if (control?.errors?.['email'] && control?.touched) return 'Invalid email';
    return '';
  }

  ngOnInit(): void {
    // Actualiza el paso al que pertenece este componente
    this.stepService.setCurrentStep(1);
  }
}
