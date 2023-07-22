import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ComplexFormComponent } from './components/complex-form/complex-form.component';
import {FormsComponent} from "./components/forms/forms.component";
import { FormTestComponent } from './components/form-test/form-test.component';
import { UiFormComponent } from './forms/ui-form/ui-form.component';

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
    path: '',
    redirectTo: 'ui-form',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
