import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ComplexFormComponent } from './components/complex-form/complex-form.component';

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
    path: '',
    redirectTo: 'form',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
