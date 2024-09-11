import { Identifiable } from "../crud/interfaces/Identificable.interface";

  export interface Product extends Identifiable{
    id?: string;  // Optional for create operations
    productName: string;
    productDescription: string;
    fkProductTypeId: number;
  }
  