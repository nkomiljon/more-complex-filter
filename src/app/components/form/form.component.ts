import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public form!: FormGroup;
  constructor(private formBulider: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm()
  }


  initForm() {
    this.form = this.formBulider.group({
      column: [''],
      operand: [null],
      value: [''],
      multiLevelForm: this.formBulider.array([])
    });
  }


  get multiLevelForm() {
    return this.form.get('multiLevelForm') as FormArray;
  }

  multiLevelFormInner() {
    return this.formBulider.group({
      condition: [null],
      column: [''],
      operand: [null],
      value: [''],
    })
  }

  addMultilevelFilter() {
    this.multiLevelForm.push(
        this.formBulider.group({
          condition: [null],
          column: [''],
          operand: [null],
          value: [''],
        })
    );
  }

  public submit() {
    console.log(this.form.value);
    
  }
}
