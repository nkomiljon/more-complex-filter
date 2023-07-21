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


  initForm() {
    this.form = this.formBuilder.group({
      list: this.formBuilder.array([])
    })
  }
}
