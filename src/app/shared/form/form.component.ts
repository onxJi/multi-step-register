import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  step: string = '1';
  steps: string = '3';
}
