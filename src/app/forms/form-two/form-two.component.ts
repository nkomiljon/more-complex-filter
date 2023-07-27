import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.scss']
})
export class FormTwoComponent implements OnInit {
  formData = {};

  form!: FormGroup;
  constructor (private formBuilder: FormBuilder) {
    
  }

  ngOnInit(): void {
      this.initForm();
      console.log(this.form);
      
  }

  initForm() {
    this.form = this.formBuilder.group({
      layer: this.formBuilder.array([]),
      logicOperator: 'and',
    })
  }

  getLayers(form: FormGroup) {
    return (form.get('layer') as FormArray)?.controls || [];
  }


  addItem(form: FormGroup) {
     this.getLayers(form).push(
      this.formBuilder.group({
        column: [''],
        operator: [''],
        value: [''],
      })
    );
  }

  addGroup(form: FormGroup) {
    this.getLayers(form).push(
      this.formBuilder.group({
        logicOperator: [''],
        layer: this.formBuilder.array([
          this.formBuilder.group({
            column: [''],
            operator: [''],
            value: [''],
          })
        ])
      })
    );
    
  }




 res = [
    {
      layer: [ 
        {
          column: 'column1',
          operator: 'operator',
          value: '',
          layer: [
            {
              logicOperator: 'And',
              column: 'column2',
              operator: 'operator',
              value: '',
              layer: [
                {
                  logicOperator: 'And',
                  column: 'column3',
                  operator: 'operator',
                  value: '',
                }
              ]
            },
          ]
        }
      ]
    } 
  ]
 
}
