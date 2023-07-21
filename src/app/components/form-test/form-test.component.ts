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

  get oneLevelForm(): FormGroup {
    return this.complexForm.get('oneLevel') as FormGroup;
  }


  get multiLevelForm(): FormArray {
    return this.complexForm.get('multiLevel') as FormArray;
  }


  /// buttons

  addOneLevelForm() {
    this.complexForm.push(this.formBuilder.group({
      oneLevel: this.formBuilder.group({
        column: [''],
      }),
      multiLevel: this.formBuilder.group([])
    }));
    const form = this.complexForm.controls[0];
    console.log(form as FormArray);
    
  }

  addMultiLevelForm() {
    console.log(this.multiLevelForm);
    
    this.multiLevelForm.push(
      this.formBuilder.group({
        column: ['']
      })
    )
  }

  
}
