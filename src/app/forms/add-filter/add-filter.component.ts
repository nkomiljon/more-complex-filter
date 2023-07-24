import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-filter',
  templateUrl: './add-filter.component.html',
  styleUrls: ['./add-filter.component.scss']
})
export class AddFilterComponent implements OnInit {

  form!:FormGroup;
  columns: string[] = ['FirstName', 'RedCardCount', 'CountryId'];
  operands: string[] = ['equal', 'not equals', 'like'];
  value: string = '';
  logicOperators: {key: string, value: string}[] = [{key: 'and', value: 'And'},{key: 'or', value: 'Or'}];

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


  getFirstLayerList(form: FormGroup) {
    const firstLayer = form.get('firstLayer') as FormArray;
    return firstLayer.controls || [];
  }


  createItem(oprions?: { logicOperator: string}) {
    const logicOperator = oprions?.logicOperator || 'and';

      return this.formBuilder.group({
        column: [''],
        operand: [''],
        value: [''],
        logicOperator: [logicOperator || '']
      })
  }




 
  addItem(form: FormGroup) {
    let firstLayer = form.get('firstLayer') as FormArray;
    let logicOperator = 'and';


    firstLayer.push(this.createItem({ logicOperator }))
  }

  addGroup(form: FormGroup) {
    const firstLayer = form.get('firstLayer') as FormArray;

    firstLayer.push(this.createItem())
  }

  send() {
    console.log(this.form.value);
    
  }
}
