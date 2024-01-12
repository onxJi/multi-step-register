// step.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class StepService {
    private currentStepSubject = new BehaviorSubject<number>(1);
    currentStep$ = this.currentStepSubject.asObservable();

    setCurrentStep(step: number): void {
        this.currentStepSubject.next(step);
    }
}
