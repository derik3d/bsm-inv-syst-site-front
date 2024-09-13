import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GeneralCrudService } from '../services/general-crud.service';
import { Identifiable } from '../interfaces/Identificable.interface';


@Component({
  selector: 'general-crud-component',
  templateUrl: './general-crud.component.html',
  styleUrls: ['./general-crud.component.css'],
  standalone: true,
})
export abstract class GeneralCrudComponent<T extends Identifiable> implements OnInit {

  entityForm!: FormGroup;
  
  entityClassName!: string;
  selectedEntity: T | null = null;

  entities: T[] = [];
  queriedEntity: T | null = null;

  //use your flattened form data for a basic form
  flattenedData: any;
  
  private fb: FormBuilder = new FormBuilder()
  private service: GeneralCrudService<T> = inject(GeneralCrudService<T>);

  constructor(){
    this.entityForm = this.fb.group(this.getFormDescription(this.fb));
    this.entityClassName = this.getClassName();
    this.flattenedData = this.flattenObject(this.entityForm.value, "", {})
  }

  //build your form
  abstract getFormDescription(fb: FormBuilder): { [key: string]: any };
  //set class name
  abstract getClassName(): string;

  ngOnInit(): void {
    this.getEntities();
  }

  selectEntity(entity: T) {
    alert(JSON.stringify(entity))
    this.selectedEntity = entity;
    this.entityForm.patchValue(entity);
  }

  getEntities() {
    this.service.getAll().subscribe((data: T[]) => this.entities = data);
  }

  getEntity() {
    const searchEntity = this.entityForm.value;
    if(searchEntity != null && searchEntity.id != null)
      this.service.get(searchEntity).subscribe((data: T) => this.queriedEntity = data);
  }

  createEntity() {
    const newEntity = this.entityForm.value;
    this.service.create(newEntity).subscribe(() => this.getEntities());
  }

  updateEntity() {
    const updatedEntity = this.entityForm.value;
    this.service.update(updatedEntity).subscribe(() => this.getEntities());
  }

  deleteEntity() {
    const deleteEntity = this.entityForm.value;
    this.service.delete(deleteEntity).subscribe(() => this.getEntities());
  }

  flattenObject(obj: any, parentKey = '', result:any): any {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        let newKey = parentKey ? `${parentKey}.${key}` : key;
  
        // If the value is an object, recursively flatten it
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
          this.flattenObject(obj[key], newKey, result);
        } 
        // If the value is an array, flatten it with indexed keys
        else if (Array.isArray(obj[key])) {
          obj[key].forEach((item:any, index:any) => {
            this.flattenObject(item, `${newKey}[${index}]`, result);
          });
        } 
        // Otherwise, it's a primitive value, add it to the result
        else {
          result[newKey] = obj[key];
        }
      }
    }
    return result;
  }

  isString(value: unknown): value is string {
    return typeof value === 'string';
  }

  unknownToString(value: unknown): string {
    return this.isString(value) ? value : '';
  }

  getInputsArray(){
    let inputs: { name: string; title: string; description: string; }[]=[]


    for (const key in this.flattenedData) {
      if (this.flattenedData.hasOwnProperty(key)) {
        inputs.push({
          name: this.unknownToString(key),
          title: this.lookupInfoInputs(this.unknownToString(key)).title,
          description: this.lookupInfoInputs(this.unknownToString(key)).description,
      })      }
    }
    return inputs;
  }

  splitOnMayus(original: string){
    return original.replace(/([A-Z])/g, ' $1').replaceAll("_"," ").trim();
  }

  lookupInfoInputs(inputName: string) : {title: string; description: string;}{
    return {
      title: this.splitOnMayus(inputName),
      description: ""
    }
  }

  onSubmit(){
    console.log(this.entityForm.value)
    console.log(this.flattenedData)
    console.log()
  }

}
