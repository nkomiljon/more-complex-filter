import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recursion-form',
  templateUrl: './recursion-form.component.html',
  styleUrls: ['./recursion-form.component.scss']
})

export class RecursionFormComponent implements OnInit {

  form!: FormGroup;
  layerContent!: FormArray;
  logicOperator: string[] = ['']
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
    const layers = this.form.get('layer') as FormArray;
    return layers.controls;
  }


  layersContent(i: number) {
    console.log('form', this.form);
    
    console.log('i', i);
    
    const layerContnet = this.layers().at(i)?.get('layerContent') as FormArray;
    console.log(layerContnet);
    return layerContnet.controls
  }

  getList(form: FormGroup) {
    
    const layerContent = form.get('layerContent') as FormArray;
    console.log(layerContent);
    
    return  layerContent.controls;
  }


  addItem(form: FormGroup) {
    // console.log(form);
    let layer = form.get('layer') as FormArray;
    
    layer.push(
      this.formBuilder.group({
        column: [''],
        operator: [''],
        value: [''],
        layerContent: this.formBuilder.array([]) 
      })
    )
  }

  addGroup(form: FormGroup) {
    //let layer = form.get('layer') as FormArray;
    //console.log('layer', layer.length);
    
    //let layerContent = layer.at(layer.length - 1).get('layerContent') as FormArray;
    let length = this.layers().length;
    this.layersContent(length - 1).push(
      this.formBuilder.group({
        logicOperator: [''],
        column: [''],
        operator: [''],
        value: ['']
      })
    )
    // console.log('lc', layerContent);

    
  }


  addItemContent(form: FormGroup) {
    console.log('LOGGG', form);
    
  }

  addGroupContent(form: FormGroup) {
    console.log('!!!!', form);
    const layerContent = form.get('layerContent') as FormArray;
    console.log('????', layerContent);
    
  }


  isLayerContent(formItem: FormGroup) {
    console.log('Test',formItem);
    let layerContent = formItem.get('layerContent') as FormArray;
    return layerContent.length == 0 ? true : false;
  }
}
