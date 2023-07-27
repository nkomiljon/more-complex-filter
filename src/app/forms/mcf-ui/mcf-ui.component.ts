import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mcf-ui',
  templateUrl: './mcf-ui.component.html',
  styleUrls: ['./mcf-ui.component.scss']
})
export class McfUiComponent {
  
  filtersForm!: FormGroup;
  columns = ['Country', 'Area', 'People'];
  comparatives = ['=', '!='];
  logicOperators = ['and', 'or'];

  constructor(private fb: FormBuilder) {
    this.filtersForm = this.createGroup();
  }

  isValidLevel(lvl: number) {
    return lvl <= 2;
  }

  getList(form: FormGroup) {
    const list = form.get('list') as FormArray;

    return list.controls || [];
  }

  createItem() {
    return this.fb.group({
      column: ['', Validators.required],
      comparative: ['', Validators.required],
      value: ['', Validators.required],
    });
  }

  addItem(form: FormGroup) {
    const list = form.get('list') as FormArray;

    list.push(this.createItem());
  }

  removeItem(form: FormGroup, index: number, parentIndex?: number) {
    const list = form.get('list') as FormArray;

    list.removeAt(index);

    if (!list.length) {
      (list.parent?.parent as FormArray).removeAt(parentIndex || 0);
    }
  }

  createGroup(options?: { logicOperator: string }) {
    return this.fb.group({
      list: this.fb.array([this.createItem()]),
      logicOperator: ['and', Validators.required],
    });
  }

  addGroup(form: FormGroup) {
    const list = form.get('list') as FormArray;

    list.push(this.createGroup());
  }

  logElement(el: unknown) {
    console.log('LOG:', el);
  }
}
