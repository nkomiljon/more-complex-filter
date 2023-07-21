import { Component, OnInit } from '@angular/core';
import {Form, FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrls: ['./complex-form.component.scss']
})
export class ComplexFormComponent implements OnInit {

  public form!: FormGroup;
  public condition: {key: string; value: string}[] = [
    {key: 'and', value: 'And'},
    {key: 'or', value: 'Or'}
  ];
  constructor(private formBuilder: FormBuilder) {

  }


  ngOnInit(): void {
      this.initForm();
  }

  private initForm() {
    this.form = this.formBuilder.group({
     oneLevelForm: this.formBuilder.array([]),
     multiLevelForm: this.formBuilder.array([])
    })
  }

  private initOneLevelForm() {
    return this.formBuilder.group({
      column: [''],
      operand: [''],
      value: ['']
    })
  }

  private initMultiLevelForm() {
    return this.formBuilder.group({
      condition: [''],
      column: [''],
      operand: [''],
      value: ['']
    })
  }

  get oneLevelForm() {
    return this.form.get('oneLevelForm') as FormArray;
  }

  get multiLevelForm() {
    return this.form.get('multiLevelForm') as FormArray;
  }

  addOneLevelFilter() {
    this.oneLevelForm.push(this.formBuilder.group({
      column: [''],
      operand: [''],
      value: ['']
    }))
  }

  addMultiplyLevelFilter() {
    console.log(this.form.value)
    if (!this.form.value.oneLevelForm.length)
      this.addOneLevelFilter()
      this.multiLevelForm.push(this.initMultiLevelForm())

    /*if (this.form.value.multiLevelForm.length)
      this.multiLevelForm.push(
        this.formBuilder.group({
          column: ['']
        })
      )*/
  }

  send() {
    console.log(this.form.value)
  }
}
