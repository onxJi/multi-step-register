import { Component, OnChanges, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { StepService } from '../../services/StepService.service';
import { filter } from 'rxjs';

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
  allSteps: number[] = [1, 2, 3];
  completedSteps: number[] = [];

  constructor(private stepService: StepService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.stepService.currentStep$.subscribe((step) => {
      this.currentStep = step;
    });
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      let currentRoute = this.activatedRoute.root;
      while (currentRoute.firstChild) {
        currentRoute = currentRoute.firstChild;
      }

      const urlSegments = this.router.url;
      console.log(urlSegments);
      const currentStep = this.determineStepFromUrl(urlSegments);
      this.updateStep(currentStep);
    });
  }
  determineStepFromUrl(urlSegments: string): number {
    if (urlSegments.includes('/resume')) {
      return 3;
    } else if (urlSegments.includes('/topics')) {
      return 2; // Si ambos form1 y form2 están presentes, selecciona el paso 2
    } else if (urlSegments.includes('/')) {
      return 1;

    } else {
      // Agrega más casos según sea necesario para otras rutas
      return 1; // Por defecto, si no se cumple ninguna condición
    }
  }
  updateStep(step: number): void {
    this.stepService.setCurrentStep(step);
  }
  shouldCheckRadioButton(step: number): boolean {
    // Lógica para determinar si el radio button debe estar marcado
    if (this.currentStep === 1) {
      return step === 1;
    } else if (this.currentStep === 2) {
      return step === 1 || step === 2;
    }
    else if (this.currentStep === 3) {
      return step === 1 || step === 2 || step === 3;
    }
    else {
      return false; // Agrega más casos según sea necesario
    }
  }

}
