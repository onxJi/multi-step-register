import { Component, OnInit, ViewChild } from '@angular/core';
import { StepService } from '../../services/StepService.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SubmitButtonComponent } from '../submit-button/submit-button.component';
import { DataService } from '../../services/DataService.service';

@Component({
  selector: 'app-topics',
  standalone: true,
  imports: [ReactiveFormsModule, SubmitButtonComponent, FormsModule],
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.css'
})
export class TopicsComponent implements OnInit {
  checkbox!: boolean;
  formtopic = this.formBuilder.group({
    topic1: [''],
    topic2: [''],
    topic3: [''],
  });

  labels: any[] = [{
    id: 'topic1',
    label: 'Software Development',
  },
  {
    id: 'topic2',
    label: 'User Experience',
  },
  {
    id: 'topic3',
    label: 'Graphic Design',
  }];
  constructor(private router: Router, private formBuilder: FormBuilder, private stepService: StepService, private dataService: DataService) {

  }
  step3() {
    this.labels.forEach(label => {
      if (this.formtopic.get(label.id)?.value) {
        this.formtopic.get(label.id)?.setValue(label.label);
      }
    });
    if (this.formtopic.valid) {
      this.dataService.setFormData(this.formtopic.value);
      this.router.navigate(['resume']);
    }

  }

  ngOnInit(): void {
    this.stepService.setCurrentStep(2);
  }
  ngOnChanges(): void {
    this.stepService.setCurrentStep(2);
  }



}
