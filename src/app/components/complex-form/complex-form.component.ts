import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrls: ['./complex-form.component.scss']
})
export class ComplexFormComponent implements OnInit {

  form!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    
  }


  ngOnInit(): void {
      this.initForm();
  }

  private oneLevelFilter(): FormGroup {
    return this.formBuilder.group({
      column: [''],
      operand: [''],
      value: ['']
    })
  }

  private multiplyLevelFilter(): FormGroup {
    return this.formBuilder.group({
      condition: [''],
      column: [''],
      operand: [''],
      value: ['']
    })
  }

  /// Initialized Form
  private initForm() {
    this.form = this.formBuilder.group({
      oneLevelFilter: this.formBuilder.array([
        this.oneLevelFilter()
      ]),
      multiplyLevelFilter: this.formBuilder.array([
        this.multiplyLevelFilter()
      ])
    });
  }


  




  addFilter() {
    console.log(this.form.value);
  }


}
