import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { StepService } from '../../services/StepService.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  currentStep: number = 1;
  steps: number = 3;

  constructor(private stepService: StepService) { }

  ngOnInit(): void {
    this.stepService.currentStep$.subscribe((step) => {
      this.currentStep = step;
    });
  }
  ngOnChanges(): void {
    this.stepService.currentStep$.subscribe((step) => {
      this.currentStep = step;
    });
  }

}
