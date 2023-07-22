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
    return this.formBuilder.group({
      oneLevel: this.formBuilder.group({
        column: [''],
        operand: [''],
        value: ['']
      }),
       multiLevel: this.formBuilder.array([])
    })
  }

  // get multiLevel(): FormArray {
  //   console.log(this.complexForm);
    
  //   return this.complexForm.controls[0].get('multiLevel') as FormArray
  // }

  /// buttons

  addOneLevelForm() {
    console.log(this.complexForm);

    this.complexForm.controls.push(
      this.formBuilder.group({
        oneLevel: this.formBuilder.group({
          column: [''],
          operand: [''],
          value: ['']
        }),
        multiLevel: this.formBuilder.array([])
      })
    )
    
    // this.form.controls = {
    //   "complexForm": this.formBuilder.array([
    //     this.formBuilder.group({
    //       oneLevel: this.formBuilder.group({
    //         column: [''],
    //         operand: [''],
    //         value: ['']
    //       }),
    //       multiLevel: this.formBuilder.array([])
    //     })
    // ])};
  }

  multiLevel(index: number) {
    return (<FormArray>(<FormArray>this.form.get('complexForm'))
    .controls[index].get('multiLevel'))
    .controls;
  }

  addMultiLevelForm() {
    console.log(this.form);
    
    console.log(this.complexForm.length);
    let lengthCF = this.complexForm.length - 1;
    this.multiLevel(lengthCF).push(
      this.formBuilder.group({
        logicOperator: [''],
        column: [''],
        operand: [''],
        value: ['']
      })
    );
    // console.log(this.multiLevel(lengthCF).push(
    //   this.formBuilder.group({
    //     logicOperator: [''],
    //     column: [''],
    //     operand: [''],
    //     value: ['']
    //   })
    // ));
  
    
  }


  addContent() {
    
  }

  send() {
    console.log(this.complexForm);
    
    console.log(this.form.controls);
  }
  
}
