import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ui-form',
  templateUrl: './ui-form.component.html',
  styleUrls: ['./ui-form.component.scss']
})
export class UiFormComponent implements OnInit {

  form!:FormGroup;
  counter: number = 0;
  constructor(private formBuilder: FormBuilder) {
    
  }

  ngOnInit(): void { 
    this.initForm();
  }


  initForm() {
    this.form = this.formBuilder.group({
      firstLayer: this.formBuilder.array([])
    })
  }

  get firstLayer(): FormArray {
    return this.form.get('firstLayer') as FormArray
  }

  firstLayerContent(index: number): FormArray {
    console.log(this.firstLayer.at(index).get('firstLayerContent') as FormArray);
    return this.firstLayer.at(index).get('firstLayerContent') as FormArray;
  }


  secondLayer(index: number) {
    return this.firstLayerContent(index).at(index).get('secondLayer') as FormArray;
  }

  secondLayerContent(index: number) {
    return this.secondLayer(index).at(index).get('secondLayerContent') as FormArray;
  }

  thridLayer(index: number) {
    return this.secondLayerContent(index).at(index).get('thridLayer') as FormArray;
  }

  addOneLayer() {
    this.firstLayer.push(
      this.formBuilder.group({
        column: [''],
        operand: [''],
        value: [''],
        firstLayerContent: this.formBuilder.array([])
      })
    )

    console.log('first layer', this.firstLayer);
    
  }

  addMultiLayer() {
    console.log('first layer', this.firstLayer);
    
    console.log(this.firstLayerContent(this.counter));
    console.log(this.firstLayer.controls);
    
    this.firstLayerContent(this.counter)
      .push(this.formBuilder.group({
        logicOperator: [''],
        secondLayer: this.formBuilder.array([
          this.formBuilder.group({
            column: [''],
            operand: [''],
            value: [''],
            secondLayerContent: this.formBuilder.array([])
          })
        ])
      }));

    this.counter++;
  }


  addSecondOneLayer() {
    this.secondLayer(0).push(
      this.formBuilder.group({
        column: [''],
        operand: [''],
        value: [''],
        secondLayerContent: this.formBuilder.array([])
      })
    )
  }

  addSecondMultiLayer() {
    this.secondLayerContent(0).push(
        this.formBuilder.group({
          logicOperator: [''],
          thridLayer: this.formBuilder.array([
            this.formBuilder.group({
              column: [''],
              operand: [''],
              value: [''],
              thridLayerContent: this.formBuilder.array([])
            })
          ])
        })
    );
  }
  


  send() {
    console.log(this.form.value);
    
  }
}
