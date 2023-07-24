import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ComplexFormComponent } from './components/complex-form/complex-form.component';
import {FormsComponent} from "./components/forms/forms.component";
import { FormTestComponent } from './components/form-test/form-test.component';
import { UiFormComponent } from './forms/ui-form/ui-form.component';
import { AddFilterComponent } from './forms/add-filter/add-filter.component';
import { FormWithRecComponent } from './forms/form-with-rec/form-with-rec.component';

const routes: Routes = [
  {
    path: 'old',
    component: FormComponent
  },
  {
    path: 'form',
    component: ComplexFormComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'forms-test',
    component: FormTestComponent
  },
  {
    path: 'ui-form',
    component: UiFormComponent
  },
  {
    path: 'add-filter',
    component: AddFilterComponent
  },
  {
    path: 'recursiv',
    component: FormWithRecComponent
  },
  {
    path: '',
    redirectTo: 'recursiv',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
