import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-with-rec',
  templateUrl: './form-with-rec.component.html',
  styleUrls: ['./form-with-rec.component.scss']
})
export class FormWithRecComponent implements OnInit {

  filtersForm!: FormGroup;
  columns = ['Country', 'Area', 'People'];
  comparatives = ['=', '!='];
  logicOperators = ['and', 'or'];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.filtersForm = this.createGroup();
  }

  getList(form: FormGroup) {
    const list = form.get('list') as FormArray;

    return list.controls || [];
  }

  createItem(options?: { logicOperator: string }) {
    const logicOperator = options?.logicOperator || 'and';

    return this.fb.group({
      column: ['', Validators.required],
      comparative: ['', Validators.required],
      value: ['', Validators.required],
      layerContent: this.fb.array([])
    });
  }


  createFilterGroup() {

    return this.fb.group({
      // logicOperator: [''],
      column: [''],
      comparative: [''],
      value: ['']
    })
  }

  addItem(form: FormGroup) {
    const list = form.get('list') as FormArray;

    let logicOperator = 'and';

    if (list.getRawValue().length > 1) {
      logicOperator = list.at(1)?.get('logicOperator')?.value.toLowerCase();
    }

    list.push(this.createItem({ logicOperator }));

    console.log(this.filtersForm.getRawValue());
    
  }

  removeItem(form: FormGroup, index: number) {
    const list = form.get('list') as FormArray;

    list.removeAt(index);
  }

  createGroup() {
    return this.fb.group({
      list: this.fb.array([])
    });
  }

  addGroup(form: FormGroup, i?: number) {
    let list = form.get('list') as FormArray;
    const layer = list.at(0).get('layerContent') as FormArray;

    console.log(layer.controls);
    
    list.push(
      this.fb.group({
        logicOperator: [''],
        list: this.fb.array([this.createFilterGroup()]),
      })
    );

    console.log(this.filtersForm.getRawValue());
  }

  changeLogicOperator(form: FormGroup, event: any) {
    const list = this.getList(form);
    const value = event.target?.value as string;

    list.forEach((el) => {
      el.get('logicOperator')?.setValue(value.toLowerCase());
    });
  }


  isLogic(i: number){
    console.log(i);
    
  }

  logElement(el: unknown) {
    console.log('LOG:', el);
  }
}

