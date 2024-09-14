import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from '../../component/product/product.component';
import { GeneralCrudComponent } from '../general-crud/general-crud.component';
import { Identifiable } from '../interfaces/Identificable.interface';

@Component({
  selector: 'app-viz-crud',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './viz-crud.component.html',
  styleUrl: './viz-crud.component.css'
})
export class VizCrudComponent<T extends Identifiable> {
  @Input() crudComponent! :GeneralCrudComponent<T>
}
