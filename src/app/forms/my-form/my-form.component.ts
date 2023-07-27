import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {

  form!: FormGroup;

  constructor (private formBuilder: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.initForm();  
  }


  initForm() {
    this.form = this.formBuilder.group({
      layer: this.formBuilder.array([])
    });
  }

  layers() {
    const layer = this.form.get('layer') as FormArray;
    return  layer.controls || [];
  }
  

  checkLayers(layer: any, i: number) {
    console.log(layer);
    console.log(i);
  
    let layerContent = this.layers().at(i)?.get('layer') as FormArray
    return layerContent.controls.length ? true : false;
  }

  addItem() {
    this.layers().push(
      this.formBuilder.group({
        column: [''],
        operator: [''],
        value: [''],
        layer: this.formBuilder.array([])
      })
    )

    console.log(this.form);
    
  }

  addGroup() {
    let length = this.layers().length - 1;
    let layer = this.layers().at(length)?.get('layer') as FormArray
    layer.push(
      this.formBuilder.group({
        logicOperator: [''],
        layer: this.formBuilder.array([
          this.formBuilder.group({
            column: [''],
            operator: [''],
            value: [''],
            layer: this.formBuilder.array([])
          })
        ])
      })
    ) 
    console.log('form', this.form);
    
  }




}
