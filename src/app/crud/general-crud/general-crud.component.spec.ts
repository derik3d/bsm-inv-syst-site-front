// src/app/components/general-crud/general-crud.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GeneralCrudService } from '../services/general-crud.service';
import { Identifiable } from '../interfaces/Identificable.interface';

@Component({
  selector: 'app-general-crud',
  templateUrl: './general-crud.component.html',
  styleUrls: ['./general-crud.component.css']
})
export class GeneralCrudComponent<T extends Identifiable> implements OnInit {
  entities: T[] = [];
  selectedEntity: T | null = null;
  entityForm: FormGroup;
  entityName: string;

  constructor(private crudService: GeneralCrudService<T>, private fb: FormBuilder) {
    this.entityForm = this.fb.group({});
    this.entityName = 'entity'; // Set default or determine dynamically
  }

  ngOnInit() {
    this.getEntities();
  }

  getEntities() {
    this.crudService.getAll().subscribe(data => {
      this.entities = data;
    });
  }

  createEntity() {
    this.crudService.create(this.entityForm.value).subscribe(() => this.getEntities());
  }

  updateEntity(id:string) {
    if (this.selectedEntity) {
      this.crudService.update(this.selectedEntity).subscribe(() => this.getEntities());
    }
  }

  deleteEntity() {
    this.crudService.delete(this.entityForm.value).subscribe(() => this.getEntities());
  }

  selectEntity(entity: T): void {
    this.selectedEntity = entity;
    this.entityForm.patchValue(entity as any);
  }
}
