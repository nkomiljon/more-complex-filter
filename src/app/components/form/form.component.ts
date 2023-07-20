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
      multiplyFilter: this.formBulider.array([])
    });
  }


  get multiplyFilter() {
    return this.form.get('multiplyFilter') as FormArray;
  }

  multiplyForm() {
    return this.formBulider.group({
      condition: [''],
      content: this.formBulider.array([
        this.formBulider.group({
          column: [''],
          operand: [''],
          value: ['']
        })
      ])
    });
  }

  contentArray(index: number) {
    return this.multiplyFilter.at(index).get('content') as FormArray;
  }

  addMultiplyFilter() {
    this.multiplyFilter.push(this.multiplyForm());
  }

  initContent() {

  }

  addContentFilter(index: number) {
    this.contentArray(index).push(this.formBulider.group({
      column: [''],
      operand: [''],
      value: ['']
    }))
  }

  addContentFilterGroup(index: number) {
    console.log(index);
    
    console.log(this.form.value);
    const data = this.form.value;
    console.log(data.multiplyFilter[0].condition);
    
    if (data.multiplyFilter[0].condition) {
      this.contentArray(index).push(this.formBulider.group({
        condition: [''],
        column: [''],
        operand: [''],
        value: ['']
      }))
    }
    
  }




  public submit() {
    console.log(this.form.value);
    
  }
}
