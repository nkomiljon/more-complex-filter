import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ComplexFormComponent } from './components/complex-form/complex-form.component';
import {FormsComponent} from "./components/forms/forms.component";

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
    path: '',
    redirectTo: 'forms',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
