import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ui-form',
  templateUrl: './ui-form.component.html',
  styleUrls: ['./ui-form.component.scss']
})
export class UiFormComponent {

  form!:FormGroup;
  
  constructor() {
    
  }
}
