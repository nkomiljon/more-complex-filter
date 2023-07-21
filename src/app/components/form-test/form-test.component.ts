import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.scss']
})
export class FormTestComponent implements OnInit {

  form!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    
  }


  ngOnInit(): void {
    this.initForm();
  }


  initForm() {
    this.form = this.formBuilder.group({
      complexForm: this.formBuilder.array([])
    })
  }



  get complexForm(): FormArray {
    return this.form.get('complexForm') as FormArray;
  }


  initComplexForm() {
     
  }


  /// buttons

  addOneLevelForm() {
  
    
  }

  addMultiLevelForm() {
   
  }

  
}
