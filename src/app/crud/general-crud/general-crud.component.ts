import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { GeneralCrudService } from '../services/general-crud.service';
import { Identifiable } from '../interfaces/Identificable.interface';

@Component({
  selector: 'general-crud-component',
  templateUrl: './general-crud.component.html',
  styleUrls: ['./general-crud.component.css'],
  standalone: true,
})
export abstract class GeneralCrudComponent<T extends Identifiable>
  implements OnInit
{
  entityForm!: FormGroup;

  controls_list!: FormControl[];

  entityClassName!: string;
  selectedEntity: T | null = null;

  completed: boolean = false;

  entities: T[] = [];
  queriedEntity: T | null = null;

  //use your flattened form data for a basic form
  flattenedData: any;

  completed_controls_loading = false;

  private fb: FormBuilder = new FormBuilder();
  private cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
  private service: GeneralCrudService<T> = inject(GeneralCrudService<T>);

  constructor() {
    Promise.resolve().then(() => {
      this.controls_list = [];

      this.entityForm = this.buildFormWithDescriptor(this.fb);

      this.flattenedData = this.flattenObject(this.entityForm.value, '', {});
      this.loadInputsArray();
      this.getEntities();
      console.log('HI');
      console.log(this.controls_list);
      this.completed_controls_loading = true;

      console.log(this.entityForm);
      console.log(this.entityForm.value);
      console.log(this.flattenedData);
    });
  }

  getClassName(): string {
    return this.service.getClassName();
  }

  ngOnInit(): void {
    this.getEntities();
  }

  abstract getData(): Object;

  buildFormWithDescriptor(fb: FormBuilder): FormGroup {
    return this.parseObjectToForm(this.getData(), fb) as FormGroup;
  }


  parseObjectToForm(data: any, formBuilder: FormBuilder): AbstractControl {
    if (Array.isArray(data)) {
      // Handle arrays
      return this.parseArrayToForm(data, formBuilder);
    } else if (typeof data === 'object' && data !== null) {
      // Handle objects
      return this.parseObjectToFormGroup(data, formBuilder);
    } else {
      // Handle simple values
      return formBuilder.control(data || '');
    }
  }
  
  // Function to handle object types and create a FormGroup
  parseObjectToFormGroup(data: any, formBuilder: FormBuilder): FormGroup {
    const group: { [key: string]: AbstractControl } = {};
    Object.keys(data).forEach((key) => {
      group[key] = this.parseObjectToForm(data[key], formBuilder);
    });
    return formBuilder.group(group);
  }
  
  // Function to handle arrays and create a FormArray
  parseArrayToForm(data: any[], formBuilder: FormBuilder): FormArray {
    const controls = data.map(item => this.parseObjectToForm(item, formBuilder));
    return formBuilder.array(controls);
  }

  //---------------really GENERAL

  selectEntity(entity: T) {
    this.selectedEntity = entity;
    this.entityForm.patchValue(entity);
  }

  getEntities() {
    this.service.getAll().subscribe((data: T[]) => (this.entities = data));
  }

  getEntity() {
    console.log(this.entityForm.value);

    const searchEntity = this.entityForm.value;
    if (searchEntity != null && searchEntity.id != null)
      this.service
        .get(searchEntity)
        .subscribe((data: T) => (this.queriedEntity = data));
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

  //---- FROM RELATED

  inputsArray: { name: string; title: string; description: string }[] = [];

  flattenObject(obj: any, parentKey = '', result: any): any {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        let newKey = parentKey ? `${parentKey}.${key}` : key;

        // If the value is an object, recursively flatten it
        if (
          typeof obj[key] === 'object' &&
          !Array.isArray(obj[key]) &&
          obj[key] !== null
        ) {
          this.flattenObject(obj[key], newKey, result);
        }
        // If the value is an array, flatten it with indexed keys
        else if (Array.isArray(obj[key])) {
          obj[key].forEach((item: any, index: any) => {
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

  trackByKey(index: number, item: any): string {
    return item.name;
  }

  splitOnMayus(original: string) {
    return original
      .replace(/([A-Z])/g, ' $1')
      .replaceAll('_', ' ')
      .replaceAll('.', ' => ')
      .trim();
  }

  loadInputsArray() {
    let inputs: { name: string; title: string; description: string }[] = [];

    for (const key in this.flattenedData) {
      if (this.flattenedData.hasOwnProperty(key)) {
        inputs.push({
          name: this.unknownToString(key),
          title: this.lookupInfoInputs(this.unknownToString(key)).title,
          description: this.lookupInfoInputs(this.unknownToString(key))
            .description,
        });
      }
    }
    this.inputsArray = inputs;
  }

  lookupInfoInputs(inputName: string): { title: string; description: string } {
    return {
      title: this.splitOnMayus(inputName),
      description: '',
    };
  }

  onSubmit() {
    console.log(this.controls_list);
    console.log(this.entityForm);
    console.log(this.entityForm.value);
    console.log(this.flattenedData);
    console.log();
  }

  isString(value: unknown): value is string {
    return typeof value === 'string';
  }

  unknownToString(value: unknown): string {
    return this.isString(value) ? value : '';
  }

  isGroup(control: any): boolean {
    return control instanceof FormGroup;
  }

  isArray(control: any): boolean {
    return control instanceof FormArray;
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
