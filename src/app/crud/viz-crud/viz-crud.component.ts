import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralCrudComponent } from '../general-crud/general-crud.component';
import { Identifiable } from '../interfaces/Identificable.interface';


import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-viz-crud',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  templateUrl: './viz-crud.component.html',
  styleUrl: './viz-crud.component.css'
})
export class VizCrudComponent<T extends Identifiable> {
  @Input() crudComponent! :GeneralCrudComponent<T>
}
