import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/DataService.service';
import { SubmitButtonComponent } from '../submit-button/submit-button.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [SubmitButtonComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements OnInit {
  summaryData: any;
  confirm = false;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.formData$.subscribe((data) => {
      this.summaryData = data;
      console.log(this.summaryData);
    });
  }
  confirmData() {
    this.confirm = true;
  }
}
