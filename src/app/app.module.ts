import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { ComplexFormComponent } from './components/complex-form/complex-form.component';
import { FormsComponent } from './components/forms/forms.component';
import { FormTestComponent } from './components/form-test/form-test.component';
import { UiFormComponent } from './forms/ui-form/ui-form.component';
import { AddFilterComponent } from './forms/add-filter/add-filter.component';
import { FormWithRecComponent } from './forms/form-with-rec/form-with-rec.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ComplexFormComponent,
    FormsComponent,
    FormTestComponent,
    UiFormComponent,
    AddFilterComponent,
    FormWithRecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
