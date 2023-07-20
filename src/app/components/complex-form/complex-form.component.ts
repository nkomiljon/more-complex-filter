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

  initForm() {
    this.form = this.formBuilder.group({
      column: [''],
      operand: [''],
      value: ['']
    })
  }




  addFilter() {
    console.log(this.form.value);
  }


}
