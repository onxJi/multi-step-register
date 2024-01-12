import { Component, OnInit } from '@angular/core';
import { StepService } from '../../services/StepService.service';

@Component({
  selector: 'app-topics',
  standalone: true,
  imports: [],
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.css'
})
export class TopicsComponent implements OnInit {

  constructor(private stepService: StepService) { }
  ngOnInit(): void {
    // Actualiza el paso al que pertenece este componente
    this.stepService.setCurrentStep(2);
  }
}
