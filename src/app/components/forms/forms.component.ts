import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {


  public form!: FormGroup;
  constructor(private formBulider: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm()
  }


  initForm() {
    this.form = this.formBulider.group({
      complexForm: this.formBulider.array([])
    });
  }


  get complexForm() {
    return this.form.get('complexForm') as FormArray;
  }

  notMultiplyForm() {
    return  this.formBulider.group({
      column: [''],
      operand: [''],
      value: ['']
    });
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
    return this.complexForm.at(index).get('content') as FormArray;
  }

  addOneLevelForm() {
    this.complexForm.push(this.notMultiplyForm())
  }

  addMultiplyFilter() {
    console.log(this.form.value)
    this.complexForm.push(this.multiplyForm());
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
