// src/app/services/mock-general-crud.service.ts

import { of } from 'rxjs';
import { GeneralCrudService } from './general-crud.service';
import { MockEntity } from '../interfaces/crud-interfaces';

export class MockGeneralCrudService extends GeneralCrudService<MockEntity> {
}
